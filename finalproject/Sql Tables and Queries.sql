show databases;
create database db2;
use db2;
#contact form
create table contact_form(
id int auto_increment,
how varchar(200),
fname varchar(200),
lname varchar(200),
email varchar(200),
cemail varchar(200),
phone varchar(20),
city varchar(20),
pin varchar(10),
 primary key(id)
 );

select * from contact_form;
 #feedback
 
 create table feedbacks(
id int auto_increment,
fname varchar(200),
lname varchar(200),
email varchar(200),
phone varchar(200),
city varchar(200),
exp varchar(200),
para varchar(200),
 primary key(id)
 );
 select * from feedbacks;
 
#homepage

create table home(
 id int auto_increment,
 name varchar(200),
 email varchar(200),
 phone varchar(200),
pin varchar(200),
primary key(id)
);
  select * from home;
  
  #createappointment 
  
create table createapp(
id int auto_increment,
 plan varchar(200),
 build varchar(200),
 ward varchar(200),
 hall varchar(200),
 study varchar(200),
 fname varchar(200),
 lname varchar(200),
 email varchar(200),
 phone varchar(200),
 city varchar(200),
 address varchar(200),
 pin varchar(200),
 status varchar(200),
 primary key(id)
);
select *from createapp;
 #updatecommand used in create app
  UPDATE createapp
SET status='incomplete'
WHERE id = 5;
