const express = require("express");

const app = express();

app.get("/", (req, res) => {

    res.send("Funcionou PORRAA!");

})

app.post("/", (req, res)=>{

})


app.get("/:nome", (req, res)=>{
/*
    res.send(`Bem vindo ${req.params.nome} com o query ${req.query.parametro}`);
})
*/

    res.send({
        nome: req.params.nome
    });

})



app.listen(3000);