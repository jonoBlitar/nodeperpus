import { Sequelize } from "sequelize";
import db from "../config/db.config.js";
import Pinjam from "./pinjam.model.js";
import Buku from "./buku.model.js";
import Mahasiswa from './mahasiswa.model.js';
 
const { DataTypes } = Sequelize;
    const DetilPinjam = db.define('detil_pinjams',{      
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      pinjam_id:{
        type: DataTypes.INTEGER
       
      },
      buku_id:{
        type: DataTypes.INTEGER
      },
      jml_pinjam: {
        type: DataTypes.INTEGER
      },
      status: {
        type: DataTypes.INTEGER
      },       
      created_at:{
        type: DataTypes.DATE
      },
      updated_at:{
        type: DataTypes.DATE
      }
      },{
        freezeTableName: true
  });
  
 // return DetilPinjam;
  //Pinjam.hasMany(DetilPinjam,{foreignKey:'pinjam_id'});
  //DetilPinjam.belongsTo(Pinjam,{foreignKey:'pinjam_id'});

  
  

  export default DetilPinjam;