A full-stack Todo application built with Spring Boot (backend), PostgreSQL (database), and React (frontend).

---

#Technologies Used

Backend: Spring Boot, Spring Data JPA  
Database: PostgreSQL  
Frontend: React, Fetch API  
Other:Lombok, CORS configuration  

---

# Features

- Create, read, update, and delete todos  
- Toggle completed status  
- Full integration between frontend and backend  
- Data persisted in PostgreSQL  

---

# API Endpoints

- GET  /todos — Get all todos  
- GET  /todos/{id} — Get todo by ID  
- POST  /todos — Create a new todo  
- PUT  /todos/{id} — Update a todo  
- DELETE /todos/{id} — Delete a todo  

Example JSON for POST /todos:

```json
{
  "title": "Learn Spring Boot",
  "completed": false
}
Example JSON for POST /todos:

```json
{
  "title": "Learn Spring Boot",
  "completed": false
}
````

---

# How to Run Backend

1. Open project in **IntelliJ IDEA**
2. Install PostgreSQL and create database:

```sql
CREATE DATABASE todo_db;
```

3. Update `application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/todo_db
spring.datasource.username=postgres
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

4. Run Spring Boot application
5. Access backend: [http://localhost:8080/todos](http://localhost:8080/todos)

---

# How to Run Frontend

1. Navigate to frontend folder:

```bash
cd todo-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start React app:

```bash
npm start
```

4. Open app: [http://localhost:3000](http://localhost:3000)

---

## Git Workflow

Basic commands used:

```bash
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
```

---

## Notes

* Backend server runs on port 8080
* Frontend server runs on port 3000
* Ensure **CORS** is enabled in backend:

```java
@CrossOrigin(origins = "http://localhost:3000")