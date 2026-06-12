module.exports = (sequelize, DataTypes) => 
{const Addresses = sequelize.define("addresses" ,{
        street: {
            type: DataTypes.STRING,
            allowNull: false
        },
        neighborhood: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        number: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        state: {
            type: DataTypes.STRING(2),
            allowNull: false
        },
        city: {
            type: DataTypes.STRING(80),
            allowNull: false
        },
        zip_code: {
            type: DataTypes.STRING(8),
            allowNull: false
        },
        user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'user_id'
        },
        latitude: {
                type: DataTypes.DECIMAL(10, 8),
        },
        longitude: {
                type: DataTypes.DECIMAL(10, 8),
        },
    },
    {
        freezeTableName: true
    }
);

return Addresses;
}