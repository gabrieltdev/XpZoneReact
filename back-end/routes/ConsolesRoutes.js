const { Consoles } = require("../config/db");
//modules
const express = require("express");
const router = express.Router();


// create new console
router.post("/register", async (req, res) => {
    const {name_console} = req.body

    try {
        const registerConsole = await Consoles.create({
            name_console: name_console
        })

        res.status(201).json({
            message: "Console cadastrado com sucesso",
            id:registerConsole.id
        });
    } catch( error ) {
        res.status(500).json({
            error: "Erro ao cadastrar o console",
            details: error.message
        })
    }
});


// alter name of console
router.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name_console } = req.body;

        const updatedRows = await Consoles.update(
            { name_console: name_console },
            { where: { id: id } }
        );

        return res.status(200).json({ message: "Nome do console atualizado com sucesso!" });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;