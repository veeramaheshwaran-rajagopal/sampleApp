# Sample REST API

This is a simple Node.js Sample application that provides a RESTful API for storing and retrieving book details

## Prerequisites
- Node.js and npm installed on your system.

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/veeramaheshwaran-rajagoal/book-store.git
```


2. Navigate to the project directory:
```bash
cd your-nodejs-api
```

3.Set the environment variables:

```bash
cp .env
```

3. Install dependencies:
```bash
npm install
```


4. Start the application:
```bash
npm run start:dev
```

The API will be accessible at `http://localhost:3000/api/v1`.
## USER API Endpoints:
- **POST /user/userSignup**: signup as new user.
- **POST /user/login**:login to application using email,password.

## POST API Endpoints:
- **GET /post/getAllPost**: Retrieve a list of book.
- **GET /post/getPost/:postId**: Retrieve an book by ID.
- **POST /post/addPost**: Create a new book by user only(not authorized by admin).
- **PUT /post/updatePost/:postId**: Update an post by ID(not authorized by admin).
- **DELETE /post/deletePost/:postId**: delete an book by ID(not authorized by admin).

Make API requests using your preferred HTTP client (e.g., cURL, Postman, or any programming language).

## Running Tests

To run the tests, use the following command:
```bash
npm test
```
