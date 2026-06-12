module.exports = (sequelize, DataTypes) => 
{const Games = sequelize.define("games" ,{
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(2000),
            allowNull: false
        },
        information: {
            type: DataTypes.STRING(2000),
            allowNull: false
        },
        condition: {
            type: DataTypes.ENUM('Novo','Usado'),
            allowNull: false
        },
        safety_tips: {
            type: DataTypes.STRING(4000),
            allowNull: false
        },
        trade_type: {
            type: DataTypes.ENUM('Venda', 'Troca'),
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        answered: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        image_url: {
            type: DataTypes.STRING(2055),
            defaultValue: "https://api.dicebear.com/7.x/pixel-art/svg"
        },
        state: {
            type: DataTypes.STRING(2),
            allowNull: false
        },
        city: {
            type: DataTypes.STRING(80),
            allowNull: false
        },
        latitude: {
                type: DataTypes.DECIMAL(10, 8),
        },
        longitude: {
                type: DataTypes.DECIMAL(10, 8),
        },
        user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'user_id'
        },
        console_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'console_id'
        },
    },
    {
        freezeTableName: true
    }
);

return Games;
}