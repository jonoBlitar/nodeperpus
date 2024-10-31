import Pinjam from "../models/pinjam.model.js";
import DetilPinjam from "../models/detil_pinjams.model.js";
import Mahasiswa from "../models/mahasiswa.model.js";



export const getAllPinjam = async (req, res) => {
  try {
    const pinjam = await Pinjam.findAll({
      include: { model: Mahasiswa },
    });
    res.json(pinjam);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getAllDetilPinjam = async (req, res) => {
  try {
    /*const detilpinjam= await DetilPinjam.findAll({
            include:[{model:Pinjam,
           }],
        }); */
    const detilpinjam = await DetilPinjam.sequelize.query(
      "SELECT c.nim,c.nama,b.tanggal_pinjam,b.tanggal_kembali,a.buku_id,a.jml_pinjam,a.status,d.judul FROM detil_pinjams a, pinjams b,mahasiswas c,bukus d where a.pinjam_id=b.id and b.nim=c.nim and a.buku_id=d.kode_buku order by a.id"
    );
    res.json(detilpinjam);
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const insertPinjam = async (req, res) => {
  try {
   
    const pinjam = await Pinjam.create(
      {     
        tanggal_pinjam: req.body.tanggal_pinjam,
        tanggal_kembali: req.body.tanggal_kembali,
        nim: req.body.nim,
        pegawai_id: req.body.pegawai_id,
        detil_pinjams: req.body.detil_pinjams       
            /* { "buku_id": req.bo, "jml_pinjam": 2, "status": 1 },
            { "buku_id": 2, "jml_pinjam": 1, "status": 1 }  */        
        
      },
      {
        include: DetilPinjam
      }
      
     );
     res.json(pinjam);
  } catch (error) {
    res.json({ message: error.message });
  }
};
