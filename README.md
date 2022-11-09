Info DB
    CREATE TABLE produtos( 
    id_produto int primary key AUTO_INCREMENT,
    nome varchar(255) NOT NULL,
    valor DECIMAL(12,2) NOT NULL,
    valorVista DECIMAL (12,2) NOT NULL,
    descricao varchar(255) NOT NULL
);

INSERT INTO produtos(nome, valor, valorVista, descricao)
    VALUES ('Bicicleta Aro 29',1299.95,1102.35,'Bike completa de alumínio Aro 29 da Vikingz');