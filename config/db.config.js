import { Sequelize } from "sequelize";
const db = new Sequelize('web_lanjut', 'root', '', {
  host: "localhost",
  dialect: "mysql",
  
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