const { Categories } = require("../config/db");
//modules
const express = require("express");
const router = express.Router();


// create new categories
router.post("/register", async (req, res) => {
    const {name_category} = req.body

    try {
        const registerCategories = await Categories.create({
            name_category: name_category
        })

        res.status(201).json({
            message: "Categories cadastrado com sucesso",
            id:registerCategories.id
        });
    } catch( error ) {
        res.status(500).json({
            error: "Erro ao cadastrar a categoria",
            details: error.message
        })
    }
});


// alter name of categories
router.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name_category } = req.body;

        const updatedRows = await Categories.update(
            { name_category: name_category },
            { where: { id: id } }
        );

        return res.status(200).json({ message: "Nome da categoria atualizada com sucesso!" });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;