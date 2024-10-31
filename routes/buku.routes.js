import express from "express";
import sequelize from '../config/db.config.js';  // Import sequelize instance tambahan testing

import {
  getAllProducts,
  tambahbukubaru,
  cariBukuByID,
  updateBuku,
  deleteBuku,AutocompleteBuku
} from "../controllers/buku.controllers.js";
// tambahan ketika akan testing
/* sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Failed to sync database:', err)); */

const router = express.Router();
router.get("/", getAllProducts);
router.post("/", tambahbukubaru);
router.get("/:id", cariBukuByID);
router.patch("/:id", updateBuku);
router.delete("/:id", deleteBuku);
router.get("/search/:searchTerm",AutocompleteBuku);


export default router;
