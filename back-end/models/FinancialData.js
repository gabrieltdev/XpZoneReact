module.exports = (sequelize, DataTypes) => 
{const FinancialData = sequelize.define("financial_data" ,{
        pix: {
            type: DataTypes.STRING,
        },
        account_number: {
            type: DataTypes.STRING(20),
        },
        agency: {
            type: DataTypes.STRING(10),
        },
        bank_name: {
            type: DataTypes.STRING(100),
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

return FinancialData;
}