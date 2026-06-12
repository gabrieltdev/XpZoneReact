module.exports = (sequelize, DataTypes) => 
{const Categories = sequelize.define("categories" ,{
        name_category: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    },
    {
        freezeTableName: true
    }
);

return Categories;
}