import Buku from "../models/buku.model.js";
import { Sequelize } from "sequelize";
export const getAllProducts=async (req, res)=>{ 
    
    try {
        const products= await Buku.findAll();        
        res.json(products);
    } catch (error) {
        res.json({message:error.message});
    }
};

export const tambahbukubaru=async (req, res)=>{ 
    
    try {
        const products= await Buku.create(req.body);        
        res.json({"message":"Buku berhasil disimpan"});
    } catch (error) {
        res.json({message:error.message});
    }
};

export const cariBukuByID=async (req, res)=>{ 
    
    try {
        const products= await Buku.findAll({
            where:{
                id:req.params.id
            }
        });        
        res.json(products[0]);
    } catch (error) {
        res.json({message:error.message});
    }
};

export const updateBuku=async (req, res)=>{ 
    
    try {
        const products= await Buku.update(req.body,{
            where:{
                id:req.params.id
            }
        });        
        res.json({"message":"Buku berhasil update"});
    } catch (error) {
        res.json({message:error.message});
    }
};

export const deleteBuku=async (req, res)=>{ 
    
    try {
        const products= await Buku.destroy({
            where:{
                id:req.params.id
            }
        });        
        res.json({"message":"Buku berhasil dihapus"});
    } catch (error) {
        res.json({message:error.message});
    }
};
export const AutocompleteBuku=async (req, res)=>{ 
      
    try {
        
        const searchTerm = req.params.searchTerm;
        //const detilpinjam=await Buku.sequelize.query("SELECT * FROM bukus WHERE judul LIKE ?", ['%' + searchTerm + '%']);  
         const detilpinjam=await Buku.findAll({
            where: {
                judul: {
                  [Sequelize.Op.like]: `%${searchTerm}%`
                }
              }

        }); 
       
        const suggestions = detilpinjam.map(buku => ({
           
            kode_buku: buku.kode_buku,
            judul:buku.judul,
            jumlah:buku.jumlah
          }));
          res.send({ suggestions });
    } catch (error) {
        res.json({message:error.message});
    }
};







