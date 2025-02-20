let db=require("../config/database");

class prestamoController{
static async obtenerPrestamo(req,res){
    let lista=await db.query("select*from propietario")
    res,json(lista);
}


}