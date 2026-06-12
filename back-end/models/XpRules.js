module.exports = (sequelize, DataTypes) =>
{const XpRules = sequelize.define("rules" ,{
        action_code: {
            type: DataTypes.STRING(60),
            allowNull: false
        },points: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        freezeTableName: true
    }
);

return XpRules;
}