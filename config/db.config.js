import { Sequelize } from "sequelize";
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  dialectModule: require('mysql2'),
  
  dialectOptions: {
    charset: 'utf8mb4',     // Ganti charset menjadi utf8 atau utf8mb4
  },
  "define": {
    "timestamps": false
  }  
});
export default db;

(async()=>{
await db.sync({ alter: true });
})();
