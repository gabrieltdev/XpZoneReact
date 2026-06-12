module.exports = (sequelize, DataTypes) => 
{const CategoriesGames = sequelize.define("category_games" ,{
        category_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'category_id'
        },
        game_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'game_id'
        }
},
    {
        freezeTableName: true
    }
);

return CategoriesGames;
}