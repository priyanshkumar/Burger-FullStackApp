DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

create table burgers(
 id integer auto_increment not null,
 burger_name varchar(150) not null,
 devoured boolean default false,
 primary key(id)
)