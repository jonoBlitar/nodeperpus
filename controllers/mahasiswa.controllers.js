import { Sequelize } from "sequelize";
import Mahasiswa from "../models/mahasiswa.model.js";
import ref_prodi from "../models/prodi.model.js";


export const getAllMhs=async (req, res)=>{ 
    
    try {
        const mahasiswas= await Mahasiswa.findAll({
            include:{model:ref_prodi},
        });        
        res.json(mahasiswas);
    } catch (error) {
        res.json({message:error.message});
    }
};

export const tambahMhsbaru=async (req, res)=>{ 
    
    try {
        const mahasiswas= await Mahasiswa.create(req.body);        
        res.json({"message":"Mahasiswa Baru berhasil disimpan"});
    } catch (error) {
        res.json({message:error.message});
    }
};

export const cariMhsByID=async (req, res)=>{ 
    
    try {
        const mahasiswas= await Mahasiswa.findAll({
            where:{
                nim:req.params.id
            }
        });        
        res.json(mahasiswas[0]);
    } catch (error) {
        res.json({message:error.message});
    }
};

export const updateMhs=async (req, res)=>{ 
    
    try {
        const mahasiswas= await Mahasiswa.update(req.body,{
            where:{
                id:req.params.id
            }
        });        
        res.json({"message":"Mahasiswa berhasil update"});
    } catch (error) {
        res.json({message:error.message});
    }
};

export const deleteMhs=async (req, res)=>{ 
    
    try {
        const mahasiswas= await Mahasiswa.destroy({
            where:{
                nim:req.params.id
            }
        });        
        res.json({"message":"Mahasiswa berhasil dihapus"});
    } catch (error) {
        res.json({message:error.message});
    }
};

export const AutocompleteMhs=async (req, res)=>{ 
  
    
    try {
        /*const mahasiswas= await Mahasiswa.findAll({
            where:{
                id:req.params.searchTerm
            }
        });*/
        const searchTerm = req.params.searchTerm;
        //const detilpinjam=await Mahasiswa.sequelize.query("SELECT * FROM mahasiswas WHERE nama LIKE ?", ['%' + searchTerm + '%']);  
        const detilpinjam=await Mahasiswa.findAll({
            where: {
                nama: {
                  [Sequelize.Op.like]: `%${searchTerm}%`
                }
              }

        });
        //console.log(detilpinjam);      
        //res.json(detilpinjam);
        const suggestions = detilpinjam.map(product => ({
            id: product.id,
            nama: product.nama,
            nim:product.nim
          }));
          res.send({ suggestions });
    } catch (error) {
        res.json({message:error.message});
    }
};







