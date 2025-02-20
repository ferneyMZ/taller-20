const express=require("express");
const router=express.Router();
const LibrosController=require("../controller/libroController")

router.get("/libro",LibrosController.obtenerLibros);
router.post("/libro",LibrosController.insertarlibros);
router.put("/libro",LibrosController.actualizarLibro);
router.delete("/libro",LibrosController.eliminarLibro);

router.get("/libro/:buscarT",LibrosController.buscarlibros);

module.exports=router;
