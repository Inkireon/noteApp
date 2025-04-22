import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from './routes/index.js';
import sequelize from "./config/db.js";

dotenv.config();
console.log("PORT from .env:", process.env.PORT);

import "./models/index.js";

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
  };
  
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  sequelize.sync({ alter: true })  // или { force: true } для удаления и пересоздания
  .then(() => {
    console.log('✅ Tables synced.');
  })
  .catch((err) => {
    console.error('❌ Error syncing tables:', err);
  });

  app.use('/api', router);

// синхронизация базы и создание таблиц в случае их отсутствия
// db.sequelize.sync();




//запуск
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});