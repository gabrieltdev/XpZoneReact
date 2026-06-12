module.exports = (sequelize, DataTypes) => 
{const MonthlyAchievements = sequelize.define("monthly_achievements" ,{
        progress_response: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        progress_xp: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        game_month: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        current_badge: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        xp_month: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        response_month: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'user_id'
        }
    },
    {
        freezeTableName: true
    }
);

return MonthlyAchievements;
}