const express=require('express');
const app = express ();

//ruta 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let librosRouter=require("./router/librosRouter");



app.use("/api",librosRouter);


    //servidor ppuerto 
    const PORT = 2002;
    app.listen(PORT,()=>{
        console.log(`servidor corriendo en el puerto: ${PORT}`);
    });