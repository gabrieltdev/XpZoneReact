module.exports = (sequelize, DataTypes) => 
{const Chats = sequelize.define("chats" ,{
        answered: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        buyer_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'buyer_id'
        },
        seller_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'seller_id'
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

return Chats;
}