//security
require('dotenv').config();
//database conection
const db = require("./config/db");
//modules
const express = require("express");
const server = express();
const cors = require("cors");
server.use(
  cors({
    origin: [
      'http://localhost:5173', 
      'https://xp-zone-react-9myuftxol-gabriels-projects-1a7bc531.vercel.app',
      'https://xp-zone-react.vercel.app' // coloque também o seu domínio principal da vercel
    ]
  }),
);
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//routes imports
const users_routes = require("./routes/UsersRoutes");
const games_routes = require("./routes/GamesRoutes");
const consoles_routes = require("./routes/ConsolesRoutes");
const addresses_routes = require("./routes/AddressesRoutes");
const user_consoles_routes = require("./routes/UserConsolesRoutes")
const categories_routes = require("./routes/CategoriesRoutes");
const categories_games_routes = require("./routes/CategoriesGamesRoutes");

//routes
server.use("/user", users_routes);
server.use("/game", games_routes);
server.use("/console", consoles_routes);
server.use("/addresses", addresses_routes);
server.use("/user-consoles", user_consoles_routes);
server.use("/categories", categories_routes);
server.use("/categories-games", categories_games_routes);

server.listen(process.env.PORT, () => {
  console.log("Servidor Ativo");
});

//for altering table with sequelize go in /config/db