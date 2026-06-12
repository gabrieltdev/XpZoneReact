module.exports = (sequelize, DataTypes) => 
{const Favorites = sequelize.define("favorites" ,{
        user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'user_id'
        },
        game_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'game_id'
        },
        console_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'console_id'
        }
},
    {
        freezeTableName: true
    }
);

return Favorites;
}