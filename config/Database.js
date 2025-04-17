import { Sequelize } from "sequelize";

const db = new Sequelize("catatanku", "rafly", "pass123", {
    host: "34.172.143.47",
    dialect: "mysql",
  });


export default db;