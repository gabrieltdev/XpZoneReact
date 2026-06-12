module.exports = (sequelize, DataTypes) => 
{const UserConsoles = sequelize.define("user_consoles" ,{
        user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'user_id'
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

return UserConsoles;
}