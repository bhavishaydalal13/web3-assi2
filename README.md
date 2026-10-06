# Student Management REST API

A simple **Student Management REST API** built using **Node.js, Express.js, and JavaScript ES Modules**. The project follows the **MVC (Model-View-Controller) architecture** to keep the application organized and maintainable.

The API allows users to **fetch, create, update, and delete student/employee records** using standard HTTP methods.

---

## 🚀 Features

* Get all students
* Get a student by ID
* Add a new student
* Update student information
* Delete a student
* JSON request and response handling
* Custom logging middleware
* MVC architecture
* RESTful API routes
* HTTP status codes for API responses

---

## 🛠️ Technologies Used

* **Node.js**
* **Express.js**
* **JavaScript (ES6 Modules)**
* **REST API**
* **JSON**
* **MVC Architecture**

---

## 📁 Project Structure

```text
student-management-api/
│
├── controller/
│   └── user.js
│
├── model/
│   └── userdata.js
│
├── routes/
│   └── userroutes.js
│
├── middleware/
│   └── logger.js
│
├── app.js
├── package.json
└── README.md
```

---

## 🏗️ MVC Architecture

This project follows the **MVC architecture**.

### Model

The `model` folder contains the student data.

```text
model/userdata.js
```

It stores the student records that are used by the API.

### Controller

The `controller` folder contains the main application logic.

```text
controller/user.js
```

It handles operations such as:

* Fetching all students
* Fetching a student by ID
* Creating students
* Updating students
* Deleting students

### Routes

The `routes` folder defines the API endpoints.

```text
routes/userroutes.js
```

It connects HTTP requests to their corresponding controller functions.

### Middleware

The `middleware` folder contains custom middleware.

```text
middleware/logger.js
```

The logger middleware displays the HTTP method and requested URL in the terminal.

### Application

`app.js` is the main entry point of the application. It:

* Creates the Express application
* Enables JSON parsing
* Loads middleware
* Loads routes
* Starts the server

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate into the project

```bash
cd student-management-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
node app.js
```

The server will start on:

```text
http://localhost:3000
```

---

## 🔌 API Endpoints

| Method | Endpoint      | Description       |
| ------ | ------------- | ----------------- |
| GET    | `/user`       | Get all students  |
| GET    | `/user/:id`   | Get student by ID |
| POST   | `/user`       | Add a new student |
| PUT    | `/update/:id` | Update a student  |
| DELETE | `/delete/:id` | Delete a student  |

---

## 📖 API Usage

### 1. Get All Students

**Request:**

```http
GET /user
```

**Example:**

```text
http://localhost:3000/user
```

Returns all available student records.

---

### 2. Get Student by ID

**Request:**

```http
GET /user/:id
```

**Example:**

```text
http://localhost:3000/user/1
```

Returns the student whose ID matches the requested ID.

If the student does not exist, the API returns:

```json
{
  "message": "employee not found",
  "success": false
}
```

---

### 3. Add a Student

**Request:**

```http
POST /user
```

**Body:**

```json
{
  "name": "Rex",
  "id": 4
}
```

The new student is added to the data array.

**Success response:**

```json
{
  "message": "Employee added successfully",
  "users": []
}
```

---

### 4. Update a Student

**Request:**

```http
PUT /update/:id
```

**Example:**

```text
http://localhost:3000/update/1
```

**Body:**

```json
{
  "name": "Updated Name"
}
```

The student's name is updated based on the provided ID.

---

### 5. Delete a Student

**Request:**

```http
DELETE /delete/:id
```

**Example:**

```text
http://localhost:3000/delete/1
```

The student with the specified ID is removed from the data array.

---

## 🧩 Middleware

The project includes a custom logger middleware.

```javascript
function loggermiddleware(req, res, next) {
    console.log(req.method);
    console.log(req.url);
    next();
}
```

For every incoming request, it displays:

```text
GET
/user

POST
/user

DELETE
/delete/2
```

The `next()` function passes control to the next middleware or route handler.

---

## 📊 HTTP Status Codes

The API uses standard HTTP status codes:

| Status Code | Meaning                             |
| ----------- | ----------------------------------- |
| `200`       | Request successful                  |
| `201`       | Resource successfully created       |
| `400`       | Bad request / required data missing |
| `404`       | Student not found                   |

---

## 🧪 Testing the API

The API can be tested using tools such as:

* Postman
* Thunder Client
* Insomnia
* REST Client extensions
* Browser for GET requests

Example:

```text
GET http://localhost:3000/user
```

For POST, PUT, and DELETE requests, use Postman or another API testing tool.

---

## 🔄 Request Flow

The basic request flow of the application is:

```text
Client
   │
   ▼
Express Server
   │
   ▼
Logger Middleware
   │
   ▼
Routes
   │
   ▼
Controller
   │
   ▼
Model / Student Data
   │
   ▼
JSON Response
   │
   ▼
Client
```

---

## 🎯 Project Objective

The objective of this project is to understand how to build a basic **REST API using Express.js** while applying the **MVC architecture**.

The project demonstrates:

* REST API development
* CRUD operations
* Express routing
* Middleware
* HTTP methods
* HTTP status codes
* Request parameters
* Request bodies
* JSON responses
* Separation of application responsibilities using MVC

---

## 👨‍💻 Author

**Rex**

Student Management REST API
Built using Node.js and Express.js.
