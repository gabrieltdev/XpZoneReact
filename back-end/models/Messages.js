module.exports = (sequelize, DataTypes) => 
{const Messages = sequelize.define("messages" ,{
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        is_read: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        chat_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'chat_id'
        },
        sender_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'sender_id'
        }
    },
    {
        freezeTableName: true
    }
);

return Messages;
}