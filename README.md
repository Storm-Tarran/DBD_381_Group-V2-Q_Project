## Marketplace API and Database
- A dockerized **Node.js + MongoDB REST API** for a simple e-commerce marketplace backend, seeded with synthetic data for users, products, orders, and reviews using the **Falso** library.

## Features
1. 'seedAll' script to populate and reset the database in one command, 'npm run seedALL'
2. 'Falco' library used to seed the synthetic data, '@ngneat/falso'
3. 'Docker' planned for deployment when needed
4. 'Mongoose' data models with structured relationships
5. 'Express.js' REST API for:
    - Products
    - Users
    - Orders
    - Reviews

## Steps for getting Started!
1. Ensure you have **Docker** and **Node.js** installed on your system.

2. Clone the Repository: "https://storm-tarran.github.io/DBD_381_Group-V2-Q_Project/"

3. Install Dependencies
- npm install

4. Start MongoDB and API Server (with Docker)
- "docker compose up -d --build"
- Confirm containers are running 
    - "docker compose ps"
    - You should see 'api' and 'mongodb' running
- Seed the database
    - "docker compose exec api npm run seedAll"
    - You should see logs confirming each see script ran successfully.


6. Verify
- Open your browser or API client(Postman) and visit:
a. "http://localhost:5001/products"
b. "http://localhost:5001/users"
c. "http://localhost:5001/orders"
d. "http://localhost:5001/reviews"


## 🧠 Author Notes
# Made By:
- Storm Tarran 600995
- Tiaan Dorfling 578128
- Ruan Bath 600544
- Joshua Ramalho 601535

## 🐛 Known Issues
- Reviews are static, simply placeholders (using Falso). No real user authentication is used yet.
- Limited input validation, basic validation is handled in mongoose, but no additional sanitization logic is applied in the API layer.
- Anonymous cart support is not implemented, while this was planned, it will be included in future updates of the project.
- No admin dashboard, as this project is mainly aimed for backend testing, there is no frontend admin interface.

## 🐦 Future Improvements
- Implement user authentication and authorization.
- Build a front end using React to consume the API.
- Integrate PayPal for real time payment simulation.
- Improve error handeling and use a central error middleware.

## 🖍️ Challenges Faced
- Designing a clean normalized NoSql scheme with linked references was tricky to get done, especially when keeping scalability and simplicity in mind.
- Making sure Docker was set up properly and that my containers ran reliably was stressful at first, especially when I thought I would have to reconfigure it mid-project.
- Knowing when to correctly use embedded subdocuments vs using references was difficult at first.

# Project for DBD 381 – Belgium Campus IT Varsity


