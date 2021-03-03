Create table states2
(
StateId int primary key,
StateName varchar(20) NOT NULL
)
insert into states2 values(1,'Odisha')
insert into states2 values(2,'KA')
insert into states2 values(3,'MP')
insert into states2 values(4,'UP')
insert into states2 values(5,'AP')



Create table Employe
(
Eid int identity(1,1) primary key,
Ename varchar(30) NOT NULL,
Emiddlename varchar(30) NOT NULL,
Elastname varchar(30) NOT NULL,
StateId int foreign key references states2(StateId),
IsActive bit NOT NULL,
Date datetime NOT NULL
)

select * from Employe

