const { UserConsoles } = require("../config/db");
// modules
const express = require("express");
const router = express.Router();

// user console binding table
router.post("/register", async (req, res) => {
    const {user_id, console_id} = req.body

    try {
        const registerUser = await UserConsoles.create({
            user_id:user_id,
            console_id:console_id
        })

        res.status(201).json({
            message: "Console vinculado com sucesso",
            user_id:user_id,
            console_id:console_id
        });

    } catch ( error ) {
        res.status(500).json({
            error: "Erro ao vincular o usuario ao console",
            details: error.message
        })
    }
});

module.exports = router;