# Marketplace API and Database
- A dockerized Node.js, MongoDB rest api for the simple e-commerce marketplace backend, with synthetic seed data for users, products, orders, and reviews using the library falco.

## Features
1. 'seedAll' script to populate and reset the database in one command
2. 'Falco' library used to seed the synthetic data
3. 'Docker' planned for deployment when needed
4. 'Mongoose' data models and the relationships
5. 'Express' rest api for users, products, orders, and reviews

## Steps
1. Ensure you have docker installed

2. Clone the repository: 

3. Create a .env file for yourself, insert the following:
    PORT=5001
    HOST=0.0.0.0
    MONGO_URI=mongodb://mongodb:27017/marketplace_data

4. Launch with Docker
- Build and start the services in detatched mode: "docker compose up -d --build"
- Confirm containers are running: "docker compose ps"

5. Seed the database
- Populate the database with the sample data by running: "docker compose exec api npm run seedAll"
- You should see outputs confirming that each seed ran and is successful.

6. Verify
- Open your browser or API client(Postman) and visit:
a. "http://localhost:5001/products"
b. "http://localhost:5001/users"
c. "http://localhost:5001/orders"
d. "http://localhost:5001/reviews"




