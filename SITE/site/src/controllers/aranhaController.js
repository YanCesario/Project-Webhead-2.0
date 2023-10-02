var aranhaModel = require("../models/aranhaModel");


function listar(req, res) {
    aranhaModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function resultadoAoBanco(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log("idUsuario", idUsuario);

    var resultado = req.body.resultadoServer;   
    console.log("resultado", resultado)

    var fkAranha = req.body.fkAranhaServer
    console.log("fk aranha = ", fkAranha)

    var pedras = req.body.pedrasServer
    console.log("fk pedras= ", pedras)


    var segundos = req.body.segundosServer
    console.log("fk pedras= ", segundos)


    if (resultado == undefined) {
        res.status(400).send("problema ao enviar o resultado");
    } else {
        
        aranhaModel.resultadoAoBanco(resultado, idUsuario, fkAranha, pedras, segundos)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        `\nNão foi possivel inserir o ${resultado}! Erro: `,
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    resultadoAoBanco,
    listar
}