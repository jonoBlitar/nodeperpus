import Users from "../models/user.model.js";
import jwt from "jsonwebtoken";

/* export const refreshToken=async(req,res)=>{
    try{
        const refreshToken=req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401);
        const user=await Users.findAll({
            where
        })

    }catch(error){
        console.log(error);
        res.json({ message: error.message });
    }
} */