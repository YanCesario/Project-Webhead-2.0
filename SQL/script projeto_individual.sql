create database Aranhaverso;
use Aranhaverso;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

select * from usuario;

create table universo(
idUniverso int primary key auto_increment,
Numero varchar(4)
);

create table aranha(
idAranha INT PRIMARY KEY AUTO_INCREMENT,
Nome VARCHAR(50),
Descrição varchar(100),
 fkUniverso int,
 constraint fkUniverso foreign key (fkUniverso) references universo(idUniverso)
);

create table sociedadeAranha(
idSociedade int,
fkAranha int,
constraint fkAranha foreign key (fkAranha) references aranha(idAranha),
fkUniverso int,
constraint fkUniverso foreign key (fkUniverso) references universo(idUniverso),
pkComposta int,
constraint pkComposta primary key (idSociedade, fkAranha, fkUniverso)
);