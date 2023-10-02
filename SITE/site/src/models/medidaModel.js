var database = require("../database/config");

function buscarUltimasMedidas() {

    instrucaoSql = `select aranha.nome, count(fkAranha) as 'usuarios' from usuario join aranha on fkAranha = idAranha group by fkAranha;`;

    console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {

    instrucaoSql = `
    SELECT * FROM estatisticas_aranha;
    
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
