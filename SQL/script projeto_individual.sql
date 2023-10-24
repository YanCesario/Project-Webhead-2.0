create database aranhaverso;
use aranhaverso;
CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fkAranha int,
    constraint fkAranha foreign key (fkAranha) references aranha(idAranha)
);

create table aranha (
idAranha int primary key AUTO_INCREMENT,
nome varchar(50)
);
create table pontuacao(
	usuarioId int primary key,
	fkAranhaUsuario int,
	pontos int,
	pedras int,
	segundos int,
	foreign key (fkAranhaUsuario)references usuario (fkAranha),
	foreign key (usuarioId) references usuario(id)
);

insert into aranha(nome) value
('Gwen'),
('Miles'),
('Noir'),
('Porker'),
('Miguel'),
('Peni'),
('Hobbie');
    
    drop view estatisticas_aranha;
     CREATE VIEW estatisticas_aranha AS
SELECT
    a.nome AS nome_aranha,
    SUM(p.pontos) AS total_pontos
FROM
    aranha a
LEFT JOIN
    pontuacao p ON a.idAranha = p.fkAranhaUsuario
GROUP BY
    a.nome;
    
    SELECT * FROM estatisticas_aranha;

select * from usuario;
    
