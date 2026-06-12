const { Addresses } = require("../config/db");
//modules
const express = require("express");
const router = express.Router();

// register address
router.post("/register", async (req, res) => {
    try { 
        const {
            street,
            neighborhood,
            number,
            state,
            city,
            zip_code,
            user_id,
            latitude,
            longitude } = req.body;

        const registerAddresses = await Addresses.create({
            street: street,
            neighborhood: neighborhood,
            number: number,
            state: state,
            city: city,
            zip_code: zip_code,
            user_id: user_id,
            latitude: latitude,
            longitude: longitude
        })

        res.status(201).json({
            message: "Endereço cadastrado com sucesso",
            id: registerAddresses.id
        });
    } catch (error) {
        res.status(500).json({
            error: "Erro ao cadastrar o jogo",
            details: error.message
        })
    }
});

module.exports = router;