const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("db_marketplace_v2", "root", "245163", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Banco de dados conectado com sucesso");
  })
  .catch((erro) => {
    console.log("Erro ao conectar" + erro);
  });

// 1. Import the Models
const Users = require("../models/Users")(sequelize, DataTypes);
const Games = require("../models/Games")(sequelize, DataTypes);
const Addresses = require("../models/Addresses")(sequelize, DataTypes);
const Consoles = require("../models/Consoles")(sequelize, DataTypes);
const FinancialData = require("../models/FinancialData")(sequelize, DataTypes);
const MonthlyAchievements = require("../models/MonthlyAchievements")(
  sequelize,
  DataTypes,
);
const Chats = require("../models/Chats")(sequelize, DataTypes);
const Messages = require("../models/Messages")(sequelize, DataTypes);
const Favorites = require("../models/Favorites")(sequelize, DataTypes);
const UserConsoles = require("../models/UserConsoles")(sequelize, DataTypes);
const Categories = require("../models/Categories")(sequelize, DataTypes);
const CategoriesGames = require("../models/CategoriesGames")(sequelize, DataTypes);

//  Foreign Keys

//  Addresses
Users.hasOne(Addresses, { foreignKey: "user_id", onDelete: 'CASCADE'});
Addresses.belongsTo(Users, { foreignKey: "user_id"});

//  Games
Users.hasMany(Games, { foreignKey: "user_id", onDelete: 'CASCADE'});
Games.belongsTo(Users, { foreignKey: "user_id" });

// Consoles
Consoles.hasMany(Games, { foreignKey: "console_id" });
Games.belongsTo(Consoles, { foreignKey: "console_id" });

//  Consoles_Users
Users.belongsToMany(Consoles, {
  through: "user_consoles",
  foreignKey: "user_id",
});
Consoles.belongsToMany(Users, {
  through: "user_consoles",
  foreignKey: "console_id",
});

//  Categories_Games
Games.belongsToMany(Categories, {
  through: "category_games",
  foreignKey: "game_id",
});
Categories.belongsToMany(Games, {
  through: "category_games",
  foreignKey: "category_id",
});

//  FinancialData
Users.hasOne(FinancialData, { foreignKey: "user_id", onDelete: 'CASCADE' });
FinancialData.belongsTo(Users, { foreignKey: "user_id" });

//  Monthly Achievements
Users.hasOne(MonthlyAchievements, { foreignKey: "user_id", onDelete: 'CASCADE' });
MonthlyAchievements.belongsTo(Users, { foreignKey: "user_id" });

//  Chat (Comprador, Vendedor e Jogo)
Users.hasMany(Chats, { as: "Buyer" ,foreignKey: "buyer_id" });
Chats.belongsTo(Users, { as: "Buyer", foreignKey: "buyer_id" });
Users.hasMany(Chats, { as: "Seller", foreignKey: "seller_id", onDelete: 'CASCADE'});
Chats.belongsTo(Users, { as: "Seller", foreignKey: "seller_id" });
Games.hasMany(Chats, { foreignKey: "game_id" });
Chats.belongsTo(Games, { foreignKey: "game_id" });

//  Messages
Chats.hasMany(Messages, { foreignKey: "chat_id", onDelete: 'CASCADE'});
Messages.belongsTo(Chats, { foreignKey: "chat_id" });
Users.hasMany(Messages, { as: "Sender", foreignKey: "sender_id", onDelete: 'CASCADE'});
Messages.belongsTo(Users, { as: "Sender", foreignKey: "sender_id" });

// Favorites
Users.hasMany(Favorites, { foreignKey: "user_id", onDelete: 'CASCADE'});
Favorites.belongsTo(Users, { foreignKey: "user_id" });
Games.hasMany(Favorites, { foreignKey: "game_id", onDelete: 'CASCADE'});
Favorites.belongsTo(Games, { foreignKey: "game_id" });

// Atualiza as tabelas para combinar com os modelos existentes sem apagar dados
// Use force: true apenas se quiser recriar todas as tabelas e perder os dados atuais
///////////////////////
sequelize.sync();
///////////////////////

module.exports = {
  sequelize,
  Users,
  Games,
  Addresses,
  Consoles,
  FinancialData,
  MonthlyAchievements,
  Chats,
  Messages,
  UserConsoles,
  Favorites,
  Categories,
  CategoriesGames,
};
