import Prodis from "../models/prodi.model.js";

export const getAllProdi=async (req, res)=>{ 
    
    try {
        const prodis= await Prodis.findAll();        
        res.json(prodis);
    } catch (error) {
        res.json({message:error.message});
    }
};

export const tambahprodibaru=async (req, res)=>{ 
    
    try {
        const prodis= await Prodis.create(req.body);        
        res.json({"message":"Prodi Baru berhasil disimpan"});
    } catch (error) {
        res.json({message:error.message});
    }
};

export const cariProdiByID=async (req, res)=>{ 
    
    try {
        const prodis= await Prodis.findAll({
            where:{
                id:req.params.id
            }
        });        
        res.json(prodis[0]);
    } catch (error) {
        res.json({message:error.message});
    }
};

export const updateProdi=async (req, res)=>{ 
    
    try {
        const prodis= await Prodis.update(req.body,{
            where:{
                id:req.params.id
            }
        });        
        res.json({"message":"Prodi berhasil update"});
    } catch (error) {
        res.json({message:error.message});
    }
};

export const deleteProdi=async (req, res)=>{ 
    
    try {
        const prodis= await Prodis.destroy({
            where:{
                id:req.params.id
            }
        });        
        res.json({"message":"Prodi berhasil dihapus"});
    } catch (error) {
        res.json({message:error.message});
    }
};







