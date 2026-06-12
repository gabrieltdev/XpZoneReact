module.exports = (sequelize, DataTypes) => 
{const Consoles = sequelize.define("consoles" ,{
        name_console: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    },
    {
        freezeTableName: true
    }
);

return Consoles;
}