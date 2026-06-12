module.exports = (sequelize, DataTypes) => 
{const Users = sequelize.define("users" ,{
            nickname: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: {
                    name: 'idx_users_nickname_unique',
                    msg: 'Este nickname já está em uso.'
                }
        },
            password: {
                type: DataTypes.STRING,
                allowNull: false
        },
            phone: {
                type: DataTypes.STRING(13),
        },
            date_of_birthday: {
                type: DataTypes.DATEONLY,
        },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: {
                    name: 'idx_users_email_unique',
                    msg: 'Este email já está em uso.'
                }
        },
            gender: {
                type: DataTypes.ENUM('M', 'F'),
        },
            url_discord: {
                type: DataTypes.STRING(400),
                defaultValue: null
        },
            rules: {
                type: DataTypes.STRING(3000),
                defaultValue: null
        },
            xp_global: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
        },
            level_global: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 1
        },
            active: {
                type: DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 1
        },
            try_login: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
        },
            blocked_until: {
                type: DataTypes.DATE,
        },
            image_url: {
                type: DataTypes.STRING(2055),
                defaultValue: "https://api.dicebear.com/7.x/pixel-art/svg"
        }
    },
    {
        freezeTableName: true
    }
);

return Users;
}