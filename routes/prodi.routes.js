import express from "express";


import {
  getAllProdi,
  tambahprodibaru,
  cariProdiByID,
  deleteProdi,
  updateProdi,
} from "../controllers/prodi.controllers.js";

const routerProdi = express.Router();

routerProdi.get("/",getAllProdi);
routerProdi.post("/",tambahprodibaru);

export default routerProdi;
