const { sequelize, Users, Addresses, Games ,Consoles} = require("../config/db");

// security
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// modules
const express = require("express");
const router = express.Router();
const { Op, where } = require("sequelize");

// consult id user active
const authMiddleware = require("../middleware/auth");

// Login
router.post("/login", async (req, res) => { 

    try {
        const user = await Users.findOne({
                where: {email: req.body.email,},
                include:
                [{
                    model: Addresses,
                    attributes: ['city'],
                }]
            });

            if (!user) {
                return res.status(401).json({
                    error: "E-mail ou senha incorretos."
                });
            }

        const passwordMatch = await bcrypt.compare(
                req.body.password, user.password
            );

            if (!passwordMatch) {
                return res.status(401).json({ 
                    error: "E-mail ou senha incorretos." 
                });
            }
        
        //create token for session validation
        const token = jwt.sign(
                { id: user.id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: '1d' }
            );

        res.status(200).json({
                user: {
                    id: user.id,
                    nickname: user.nickname,
                    email: user.email,
                    image_url: user.image_url,
                    level_global: user.level_global,
                    xp_global: user.level_global,
                    city:user.address.city
                },
                token: token,
                message: "Logado!"
            });

        }   catch (error) {
            console.error(error)
                res.status(500).json({
                    error: "Erro interno no servidor",
                    details: error.message
                });
            }
});

// token validation
router.post("/verify", async (req, res) => {
    try {const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ valid: false });
    };

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ valid: false });
    };

    res.status(200).json({ valid: true, user });
    });

    } catch {
        res.status(401 || 403).json({
            valid: false,
            message: "Token inválido ou expirado"
        });
    }
});

// Register
router.post("/register", async (req, res) => {
    try {
        //validate user
        const { nickname, email, password } = req.body;

        const users = await Users.findAll({
            where: {
                    [Op.or]: [
                    { email: email },
                    { nickname: nickname }
                ]
            }
        });

        const errors = {};
            if (users.length > 0) {
                users.forEach(user => {
                    if (user.email === email) {
                        errors.email = "Esse e-mail já existe.";
                    }
                    if (user.nickname === nickname) {
                        errors.nickname = "Esse Apelido já existe.";
                    }
                });

            if (Object.keys(errors).length > 0) {
                return res.status(400).json({ errors });
                }
        };



        //create user

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await Users.create({
            nickname,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "Usuário criado com sucesso",
            id: newUser.id
        });

    } catch (error) {
        res.status(500).json({
            error: "Erro ao cadastrar o usuário",
            details: error.message
        })
    }
});

// get users by state
router.get("/users-nearby", authMiddleware, async (req,res) =>{
    try {
        const ActiveUser = req.userId

        const activeUserAddress = await Addresses.findOne({
            where: { user_id: ActiveUser },
            attributes: ['state','latitude','longitude']
        });

        if (!activeUserAddress) {
            return res.status(404).json({ message: "Endereço não encontrado" });
        }

        const searchUsersNearby = await Users.findAll({
            include: [
                {
                    model: Addresses,
                    attributes: ['state'],
                    where: {
                        state: activeUserAddress.state
                        }
                },
                {
                    model: Games,
                    attributes: ['name','id']
                },
                {
                    model: Consoles,
                    attributes: ['name_console','id'],
                    through: { attributes: [] },
                }
            ],
            attributes: [
                'nickname', 'level_global', 'image_url', 'id',
                [
                    sequelize.literal(`(
                    6371 * acos(
                        cos(radians(${activeUserAddress.latitude})) * cos(radians('addresses.latitude')) *
                        cos(radians('addresses.latitude') - radians(${activeUserAddress.longitude})) +
                        sin(radians(${activeUserAddress.latitude})) * sin(radians('addresses.latitude'))
                    )
                )`),
                'distance'
                ]
            ],
            where: {
                id: { [Op.ne]: ActiveUser },
            },
            order: [
                [sequelize.literal('distance ASC')]
            ],
            limit: 6
        });

        const usersFormatted = searchUsersNearby.map(user => {
            const userObj = user.get({ plain: true }); 
            
            if (userObj.consoles) {
                userObj.consoles = userObj.consoles.slice(0, 2); 
            }

            userObj.totalGames = userObj.games ? userObj.games.length : 0;
            
            return userObj;
        });

        return res.status(200).json(usersFormatted);

    } catch( error ) {
        return res.status(500).json({ error: error.message });
    }
})

module.exports = router;