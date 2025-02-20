let db=require("../config/database")


class LibrosController{
    static async obtenerLibros(req, res) {
        let [lista] = await db.query("SELECT * FROM libro");
        res.json(lista);
    }

    static async insertarlibros(req,res){
        let { titulo,autor,añoPublicacion,disponibilidad } = req.body;
        let lista = await db.query("INSERT INTO libro (titulo,autor,añoPublicacion,disponibilidad) VALUES (?,?,?,?)", [titulo,autor,añoPublicacion,disponibilidad]);
        res.json({reqbody: req.body});
    }
    static async eliminarLibro(req,res){
        let { id } = req.params;
        await db.query("DELETE FROM libro WHERE id = ?", [id]);
        res.json({ msj: "eliminado" });
    }

    static async actualizarLibro(req,res){
        let { id } = req.params;
        let { titulo,autor,añoPublicacion,disponibilidad } = req.body;
        await db.query("update libro set titulo = ?, autor=?,añoPublicacion=?, disponibilidad=?",[titulo,autor,añoPublicacion,disponibilidad]);
        res.json({ msj: "actualizado" });
    }
    static async buscarlibros(req,res){
        let {buscarT} = req.params;
        let buscar=await db.query("select * from libros where titulo=?",[buscarT]);
        res.json(buscar);
    }
    }
    module.exports=LibrosController;




    
