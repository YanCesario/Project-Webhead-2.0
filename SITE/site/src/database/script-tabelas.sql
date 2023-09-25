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

insert into aranha(nome) value
('Gwen'),
('Miles'),
('Noir'),
('Porker'),
('Miguel'),
('Peni'),
('Hobbie');

select * from aranha;