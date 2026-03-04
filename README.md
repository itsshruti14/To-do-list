

Day 1 Git Fundamentals



Topics Learned

What is Git

Working directory vs staging vs commit

Local vs remote repository

Basic branching



Commands Practiced



git init

git status

git add .

git commit -m "message"

git log

git branch

git checkout -b branch-name

git merge branch-name

git remote add origin <url>

git push -u origin main

git pull



Tasks Completed

Created folder todo-project

Initialized Git

Created README file

Made meaningful commits

Pushed project to GitHub



---



Day 2 Spring Boot Basics



Dependencies Used

Spring Web

Spring Data JPA

PostgreSQL Driver

Lombok



Concepts Learned

Project structure

SpringBootApplication

RestController

GetMapping



Test API



GetMapping("/hello")

public String hello() {

return "Hello Students";

}



---



Day 3 PostgreSQL and JPA Setup



Installed PostgreSQL

Created database



CREATE DATABASE todo\_db;



Configured application.properties



spring.datasource.url=jdbc:postgresql://localhost:5432/todo\_db

spring.datasource.username=postgres

spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update

spring.jpa.show-sql=true



Concepts Learned

JPA

Entity

Id

GeneratedValue

ddl auto



Created Todo Entity with fields

id Long

title String

completed Boolean



Verified table creation in PostgreSQL



---



Day 4 Backend CRUD Implementation



Concepts Learned

JpaRepository

PostMapping

GetMapping

PutMapping

DeleteMapping

PathVariable

RequestBody



Implemented APIs



POST /todos

GET /todos

GET /todos/{id}

PUT /todos/{id}

DELETE /todos/{id}



---



Day 5 API Testing Using Postman



Concepts Learned

HTTP methods

Status codes

JSON request body

Headers



Example JSON



{

"title": "Learn Spring Boot",

"completed": false

}



Verified data storage in PostgreSQL

Verified update and delete functionality



---



Day 6 React Basics



Created React app using



npx create-react-app todo-frontend



Concepts Learned

Components

useState

useEffect

Forms

Fetch API



Built basic UI with

Input field

Add button

Display list



Used local state only



---



Day 7 Connect React to Backend



Enabled CORS in backend



CrossOrigin(origins = "\[http://localhost:3000](http://localhost:3000)")



Connected APIs using fetch



Implemented

Load todos on page load

Add todo

Delete todo

Toggle completed



Verified full integration between frontend and backend



---



API Endpoints



GET /todos

GET /todos/{id}

POST /todos

PUT /todos/{id}

DELETE /todos/{id}



---



How To Run Backend



Open project in IntelliJ

Configure PostgreSQL

Update application.properties

Run Spring Boot application

Access \[http://localhost:8080/todos](http://localhost:8080/todos)



---



How To Run Frontend



cd todo-frontend

npm install

npm start



Open \[http://localhost:3000](http://localhost:3000)





