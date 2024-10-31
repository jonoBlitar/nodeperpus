import request from "supertest";
import app from "../index.js";
import Buku from "../models/buku.model.js";
import sequelize from "../config/db.config.js"; // Import sequelize instance tambahan testing
let server;

// Mocking Sequelize model menggunakan jest.spyOn atau jest.mock
jest.mock("../models/buku.model.js");
beforeAll(async () => {
    await sequelize.authenticate(); // Establish connection
    await sequelize.sync(); // Sync models
});
afterAll(async () => {
    await sequelize.close(); // Close connection
});

describe("GET /buku", () => {
  it("should return a list of buku", async () => {
    // Mock data untuk testing
    Buku.findAll.mockResolvedValue([
      { kode_buku: 1, judul: "node js itu mudah", jumlah: "5" },
      { kode_buku: 2, judul: "node js mudah untuk pemula", jumlah: "5" },
    ]); 

    const response = await request(app).get('/api/buku');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(2);
  });
  // Menutup koneksi setelah tes di dalam blok ini selesai
});

