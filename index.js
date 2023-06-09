const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "co28d739i4m2sb7j.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "j8ht7xgqddhdfv9q",
    password: "z4ou6586a3mu3npj",
    database: "dbhdpgvgmy4umuxb"
});

// HTTP: POST
app.post("/create", (req, res)=>{
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const pais = req.body.pais;
    const cargo = req.body.cargo;
    const anios = req.body.anios;

    db.query("INSERT INTO empleados(nombre, edad, pais, cargo, anios) VALUES(?,?,?,?,?)", [nombre, edad, pais, cargo, anios],
    (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    }
    );
});
// HTTP: GET
app.get("/empleados", (req, res)=>{
    db.query("SELECT * FROM empleados",
    (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    }
    )
});
// HTTP: PUT
app.put("/update", (req, res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const pais = req.body.pais;
    const cargo = req.body.cargo;
    const anios = req.body.anios;

    db.query("UPDATE empleados SET nombre=?, edad=?, pais=?, cargo=?, anios=? WHERE id=?", [nombre, edad, pais, cargo, anios, id],
    (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    }
    );
});
// HTTP: DELETE
app.delete("/delete/:id", (req, res)=>{
    const id = req.params.id;

    db.query("DELETE FROM empleados WHERE id=?", id,
    (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    }
    );
});

const port = 3001;

app.listen(port, ()=>{
    console.log(`Corriendo en el puerto ${port}`)
});