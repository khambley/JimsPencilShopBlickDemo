CREATE TABLE Product (
ProductId int IDENTITY(1,1) NOT NULL PRIMARY KEY,
ProductImage varchar(max) NOT NULL ,
ProductName varchar(max) NOT NULL ,
ProductTitle varchar(max) NOT NULL ,
ProductDescription varchar(max) NOT NULL ,
ProductPrice money NOT NULL , 
BuyerName varchar(max) NOT NULL
)
Go

CREATE TABLE Buyer (
BuyerId int IDENTITY(1,1) NOT NULL PRIMARY KEY ,
BuyerName varchar(max) NOT NULL
)
Go

INSERT INTO Buyer VALUES('Jim');
INSERT INTO Buyer VALUES('Jill');
INSERT INTO Buyer VALUES('Jack');