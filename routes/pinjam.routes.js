import express from "express";


import {
  getAllPinjam,getAllDetilPinjam,insertPinjam
} from "../controllers/pinjam.controllers.js";

const routerPinjam = express.Router();

routerPinjam.get("/",getAllPinjam);
routerPinjam.get("/detil",getAllDetilPinjam);
routerPinjam.post("/",insertPinjam);

export default routerPinjam;