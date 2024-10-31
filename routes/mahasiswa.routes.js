import express from "express";


import {
  getAllMhs,cariMhsByID,tambahMhsbaru,updateMhs,deleteMhs,AutocompleteMhs
} from "../controllers/mahasiswa.controllers.js";

const routerMhs = express.Router();

routerMhs.get("/",getAllMhs);
routerMhs.post("/", tambahMhsbaru);
routerMhs.get("/:id", cariMhsByID);
routerMhs.patch("/:id", updateMhs);
routerMhs.delete("/:id", deleteMhs);
routerMhs.get("/search/:searchTerm",AutocompleteMhs);

export default routerMhs;
