# Community React Quarkus

## Overview

This project integrates React frontend with Quarkus backend to create a community platform. 

## Technologies Used

### Frontend (React)
- React.js: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for creating custom designs.

### Backend (Quarkus)
- Quarkus: A Kubernetes Native Java stack tailored for OpenJDK HotSpot and GraalVM, crafted from best-of-breed Java libraries and standards.
- User API:
  - List all users
  - Get user by ID
  - Create user
  - Delete user
  - Update user Profile
- Product API:
  - List all product
  - Get product by ID
  - Create product
  - Delete product
  <!-- - Update product -->
- Post API:
  - List all post
  - Get post by ID
  - Create post
  - Delete post

## Getting Started

### Database (Mysql)

To run the application locally, follow these steps:

1. Clone this repository.
2. Navigate to the `frontend` directory and install dependencies by running:
    ```
    npm install
    ```
3. Start the frontend server by running:
    ```
    npm start
    ```
4. Navigate to the `backend` directory and build the Quarkus application by running:
    ```
    ./mvnw clean install
    ```
5. Start the Quarkus backend by running:
    ```
    java -jar target/quarkus-app/quarkus-run.jar
    ```

## Usage

- Visit the React frontend running at http://localhost:3000 to interact with the community platform.
- Utilize the Quarkus backend APIs to perform CRUD operations on users.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
