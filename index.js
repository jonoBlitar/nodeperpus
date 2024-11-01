import express from "express";
import db from "./config/db.config.js";
import bukuRoute from "./routes/buku.routes.js"
import prodRoute from"./routes/prodi.routes.js"
import mhsRoute from "./routes/mahasiswa.routes.js"
import pinjamRoute from "./routes/pinjam.routes.js"
import userRoute from "./routes/user.routes.js"
import cors from "cors";

const app=express();

/*const startServer = async () => {
    try {
      // Menggunakan await untuk sequelize.authenticate di dalam async function
      await db.authenticate();
      console.log('Database connected');
  
      // Sync model ke database
      await db.sync();
      console.log('Database synced');
    } catch (error) {
      console.error('Failed to connect to the database:', error);
    }
  };
*/
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/',(req,res)=>{
res.json({message:"Hello coba backend untuk vercel"});
});
/*app.use('/api/buku',bukuRoute);
app.use('/api/prodi',prodRoute);
app.use('/api/mhs',mhsRoute);
app.use('/api/pinjam',pinjamRoute);
app.use('/api/user',userRoute);
startServer();*/
app.listen(5000);
export default app;

