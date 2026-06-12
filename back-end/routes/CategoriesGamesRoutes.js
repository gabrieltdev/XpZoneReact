const { CategoriesGames } = require("../config/db");
//modules
const express = require("express");
const router = express.Router();

// games category binding table
router.post("/register", async (req, res) => {
    const {game_id, category_id} = req.body

    try {
        const registerCategory = await CategoriesGames.create({
            game_id:game_id,
            category_id:category_id
        })

        res.status(201).json({
            message: "Categoria vinculado com sucesso",
            game_id:game_id,
            category_id:category_id
        });

    } catch ( error ) {
        res.status(500).json({
            error: "Erro ao vincular o jogo a categoria",
            details: error.message
        })
    }
});

module.exports = router;