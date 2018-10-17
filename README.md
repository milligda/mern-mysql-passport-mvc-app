# MERN (MySQL, Express, React, Node) App with Passport User Authentication

## About This Boilerplate

This setup allows for a Node/Express/React app integrating Passport's local user authentication.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

Passport is utilized for the User Authentication (Login and Signup) and is connected with the MySQL User model.

The application is set up using a MVC (model-view-controller) structure.  

## Starting the app locally

**Configure the MySQL database:**

- In server.js set the secret key for the passport session
- In config/config.js - replace the development username, password, and database name to match your local MySQL user information and application database

**Create the MySQL database:**

Unlike Mongoose (with MongoDB), Sequelize will not automatically create a MySQL database if it does not already exist. Given that, the first step is to create the database your application will use. If you typically use MySQL as part of MAMP or another similar program, be sure to start that program first. 

You can create the database using a program such as MySQL Workbench or from the command line. Below are the steps to create the database using the command line. 

 - Log into MySQL using the below command. Replace {username} with your own username (e.g. root)

 ```
 mysql -u {username} -p
 ```

 - Type in the MySQL user password when prompted
 - You should now be logged into the MySQL Monitor.  
 - Create the database using the below command. Replace {dbname} with your application's database name

 ```
 CREATE DATABASE {dbname};
 ```

 - The database should now exist so you can close out of the MySQL Monitor. 

**Install the front and backend dependencies:**

- While in the root directory, run the following command to install node modules within the server and the client folder:

```
yarn install
```

- After both yarn installations complete, run the following command in your terminal:

```
yarn start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Demo

You can see a working demo at <https://mern-mysql-bootstrap.herokuapp.com/>