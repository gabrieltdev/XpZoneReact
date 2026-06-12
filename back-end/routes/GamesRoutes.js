const { sequelize, Games, Addresses, Consoles, Categories } = require("../config/db");

// modules
const express = require("express");
const router = express.Router();
const { Op, where } = require("sequelize");

// consult id user active
const authMiddleware = require("../middleware/auth");

// create games
router.post("/register", async (req, res) => {
try {
    const {
        name,
        description,
        information,
        condition,
        safety_tips,
        trade_type,
        image_url,
        latitude,
        longitude,
        state,
        city,
        user_id,
        console_id
        } = req.body;

    const registerGame = await Games.create({
        name: name,
        description: description,
        information: information,
        condition: condition,
        safety_tips: safety_tips,
        trade_type: trade_type,
        image_url: image_url,
        latitude: latitude,
        longitude: longitude,
        state: state,
        city: city,
        user_id: user_id,
        console_id: console_id
    })

    res.status(201).json({
        message: "Jogo cadastrado com sucesso",
        id: registerGame.id
    });
} catch ( error ) {
    res.status(500).json({
        error: "Erro ao cadastrar o jogo",
        details: error.message
    })
}
});

// get games close
router.get("/close-to-you", authMiddleware, async (req, res) => {
try {
    const ActiveUser = req.userId

    const userAddress = await Addresses.findOne({
        where: { user_id: ActiveUser },
        attributes: ['state','latitude','longitude']
    });

    if (!userAddress) {
            return res.status(404).json({ message: "Endereço não encontrado" });
    }

    const searchCloseToYou = await Games.findAll({
        attributes: {
        include: [
            [
                sequelize.literal(`(
                    6371 * acos(
                        cos(radians(${userAddress.latitude})) * cos(radians(latitude)) *
                        cos(radians(longitude) - radians(${userAddress.longitude})) +
                        sin(radians(${userAddress.latitude})) * sin(radians(latitude))
                    )
                )`),
                'distance'
            ]]
        },
        where: { 
            state: userAddress.state,
            user_id: { [Op.ne]: ActiveUser },
        },
        order: 
        [
            [sequelize.literal('distance ASC')],
            ['createdAt', 'DESC']
        ],
        limit: 5
});

return res.status(200).json(searchCloseToYou);

} catch (error) {
return res.status(500).json({ error: error.message });
}
});

// get count games and name console by consoles
router.get("/console/list-count", authMiddleware, async (req,res) => {
try{
    const ActiveUser = req.userId

    const userAddress = await Addresses.findOne({
        where: { user_id: ActiveUser },
        attributes: ['state']
    });

    const Count = await Games.findAll({
        attributes: [
            'console_id',
            [sequelize.fn('COUNT', sequelize.col('Games.id')), 'totalGames']
        ],
        where: { 
            state: userAddress.state,
            user_id: { [Op.ne]: ActiveUser },
        },
        include: [{
            model:Consoles,
            attributes: ['name_console']
        }],
        group: ['Games.console_id', 'Console.id'],
})

return res.status(200).json(Count);
} catch (error) {
return res.status(500).json({ error: error.message });
}
});

// get count all filters
router.get("/filters-summary", authMiddleware, async (req,res) => {
try {
    const ActiveUser = req.userId

    const userAddress = await Addresses.findOne({
        where: { user_id: ActiveUser },
        attributes: ['state']
    });

    if (!userAddress) {
            return res.status(404).json({ message: "Endereço não encontrado" });
    }

    const filtersWhere = { 
        state: userAddress.state,
        user_id: { [Op.ne]: ActiveUser }
    };

    const filters = [
        {
            key: 'byConsole',
            column: 'console_id',
            group: ['Games.console_id', 'Console.id'],
            include: [{ model: Consoles, attributes: ['name_console'] }]
        },
        {
            key: 'byCondition',
            column: 'condition',
            group: ['Games.condition'],
            include: []
        },
        {
            key: 'byTradeType',
            column: 'trade_type',
            group: ['Games.trade_type'],
            include: []
        }
    ];

    const promises = filters.map(async (item) => {
        const resultado = await Games.findAll({
            attributes: [
                item.column,
                [sequelize.fn('COUNT', sequelize.col('Games.id')), 'total']
            ],
            where: filtersWhere,
            include: item.include,
            group: item.group
        });

        return { [item.key]: resultado };
    });

    // Executes all database searches simultaneously.
    const resultadosArray = await Promise.all(promises);

    //  Combine everything into a single final object using Object.assign.
    const GroupedData = Object.assign({}, ...resultadosArray);

    return res.json(GroupedData);

} catch (error) {
    return res.status(500).json({ error: "Erro na agregação dinâmica" });
}
})

// Search Bar

// list of cities existing
router.get("/cities", async (req,res) => {
    try {
        const cities = await Games.findAll({
            attributes: ["city"],
            group: ["Games.city"]
        })
        return res.json(cities);
    } catch {
        return res.status(500).json({ error: "Erro ao procurar as cidades" });
    }
})

// get games search
router.get("/search", authMiddleware, async (req, res) => {
try {
    console.log(req.query)
const { trade_type, condition, city, consoles, search, orderBy } = req.query;

const ActiveUser = req.userId

const userAddress = await Addresses.findOne({
        where: { user_id: ActiveUser },
        attributes: ['latitude','longitude']
    });

let filtersWhere = {
    user_id: { [Op.ne]: ActiveUser },
    city: city,
};

if (search) {
    filtersWhere.name = { [Op.like]: `%${search}%` };
}

if (consoles) {
    const consolesList = typeof consoles === 'string' ? consoles.split(',') : consoles;

    filtersWhere.console_id = {
        [Op.in]: consolesList
    };
}

if (condition) {
    const conditionList = typeof condition === 'string' ? condition.split(',') : condition;

    filtersWhere.condition = {
        [Op.in]: conditionList
    };
}

if (trade_type) {
    const trade_typeList = typeof trade_type === 'string' ? trade_type.split(',') : trade_type;

    filtersWhere.trade_type = {
        [Op.in]: trade_typeList
    };
}

// order
let filtersOrder = [['id', 'DESC']];
if (orderBy === 'latest') {
    filtersOrder = [['createdAt', 'DESC']];
} else if (orderBy === 'oldest') {
    filtersOrder = [['createdAt', 'ASC']];
} else if (orderBy === 'closer') {
    filtersOrder = [[sequelize.literal('distance'), 'ASC']];
} else if (orderBy === 'farAway') {
    filtersOrder = [[sequelize.literal('distance'), 'DESC']];
}

const games = await Games.findAll({
    where: filtersWhere,
    attributes: {
        include: [
            [
                sequelize.literal(`(
                    6371 * acos(
                        cos(radians(${userAddress.latitude})) * cos(radians(latitude)) *
                        cos(radians(longitude) - radians(${userAddress.longitude})) +
                        sin(radians(${userAddress.latitude})) * sin(radians(latitude))
                    )
                )`),
                'distance'
            ]
        ]
    },
    order: filtersOrder,
});

return res.json(games);

} catch (error) {
return res.status(500).json({ error: error.message });
}
});

//

// get count games by consoles
router.get("/console/count/:id", async (req,res) => {
const { id } = req.params;

try{
    const Count = await Games.count({
        where: { console_id: id }
})

    return res.status(200).json({total:Count});
} catch (error) {
    return res.status(500).json({ error: error.message });
}
});

// get count games by categories
router.get("/categorie/count/:id", authMiddleware, async (req,res) => {
const { id } = req.params;

try{
    const ActiveUser = req.userId

    const userAddress = await Addresses.findOne({
        where: { user_id: ActiveUser },
        attributes: ['state']
    });

    if (!userAddress) {
            return res.status(404).json({ message: "Endereço não encontrado" });
    }

    const Count = await Games.count({
        where: { 
            state: userAddress.state
        },
        distinct: true,
        include: [{
            model: Categories,
            where: { id: id },
            attributes: [],
            through: { attributes: [] },
            required: true
        }]
    });

return res.status(200).json({total:Count});
} catch (error) {
return res.status(500).json({ error: error.message });
}
});

// get games by console
router.get("/console/:id", authMiddleware, async (req,res) => {
try{
const ActiveUser = req.userId
const { id } = req.params;

const consoleName = await Consoles.findOne({
    where: {id: id},
    attributes: ['name_console']
})

const userAddress = await Addresses.findOne({
    where: { user_id: ActiveUser },
    attributes: ['state','latitude','longitude']
});

if (!userAddress) {
        return res.status(404).json({ message: "Endereço não encontrado" });
    }

const searchByConsole = await Games.findAll({
    attributes: {
    include: [
        [
            sequelize.literal(`(
                6371 * acos(
                    cos(radians(${userAddress.latitude})) * cos(radians(latitude)) *
                    cos(radians(longitude) - radians(${userAddress.longitude})) +
                    sin(radians(${userAddress.latitude})) * sin(radians(latitude))
                )
            )`),
            'distance'
        ]]
    },
    where: { 
        console_id: id,
        state: userAddress.state,
        user_id: { [Op.ne]: ActiveUser },
    },
    order: 
    [
        [sequelize.literal('distance ASC')],
        ['createdAt', 'DESC']
    ],
    limit: 5
});

return res.status(200).json({ console: consoleName.name_console, games: searchByConsole });
} catch (error) {
return res.status(500).json({ error: error.message });
}
});

// alter infos of game
router.patch("/categorie/:id", async (req, res) => {
try {
    const { id } = req.params;
    const { categorie_id } = req.body;

    const updatedRows = await Games.update(
        { categorie_id: categorie_id },
        { where: { id: id } }
    );

    return res.status(200).json({ message: "id da categoria atualizada com sucesso!" });

} catch (error) {
    return res.status(500).json({ error: error.message });
}
});

module.exports = router;
