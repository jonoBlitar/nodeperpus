import { Sequelize } from "sequelize";
import db from "../config/db.config.js";
import Mahasiswa from "./mahasiswa.model.js";
import DetilPinjam from "./detil_pinjams.model.js";
import Buku from "./buku.model.js";

 
const { DataTypes } = Sequelize;
    const Pinjam = db.define('pinjams',{      
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tanggal_pinjam:{
        type: DataTypes.DATE
       
      },
      tanggal_kembali:{
        type: DataTypes.DATE
      },
      nim: {
        type: DataTypes.INTEGER
      },
      pegawai_id: {
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
  Mahasiswa.hasMany(Pinjam, { foreignKey: 'nim' });
  Pinjam.belongsTo(Mahasiswa, { foreignKey: 'nim'});
  
/*   Pinjam.belongsToMany(Buku, { through: DetilPinjam, foreignKey: 'pinjam_id' });
  Buku.belongsToMany(Pinjam, { through: DetilPinjam, foreignKey: 'buku_id' }); */

  Pinjam.hasMany(DetilPinjam, { foreignKey: 'pinjam_id' });
  DetilPinjam.belongsTo(Pinjam, { foreignKey: 'pinjam_id' });
  export default Pinjam;