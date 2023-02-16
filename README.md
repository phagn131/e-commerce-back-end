# E-Commerce Back-End

## User Story

As a manager in an internet retail company, my goal is to have a modern back end integrated into our e-commerce website, which utilizes the most up-to-date technologies. This is essential to ensure that our company can stay competitive within the e-commerce industry.

## Acceptance Criteria

To connect a functional Express.js API to a database, one must add database name, MySQL username, and MySQL password to an environment variable file. Once this is done, Sequelize can be used to connect to the database. Running schema and seed commands creates a development database with test data. Upon invoking the application, the server is started and Sequelize models are synced to the MySQL database. Testing the API with Insomnia allows the user to display JSON-formatted data for categories, products, and tags, and to successfully create, update, and delete data in the database using API POST, PUT, and DELETE routes.


## Technical Workflow 

To create database relationships between models, execute association methods and set up foreign key relationships that match the column created in the respective models. In product-routes.js, tag-routes.js, and category-routes.js, complete the unfinished routes to perform RESTful CRUD operations using Sequelize models. After creating the models and routes, seed the database and sync Sequelize to the MySQL database on server start by creating code in server.js.


## Mock-Up

The following animation shows the application's GET routes to return all categories, all products, and all tags being tested in Insomnia:

![In Insomnia, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./Assets/13-orm-homework-demo-01.gif)

The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia:

![In Insomnia, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./Assets/13-orm-homework-demo-02.gif)

The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia:

![In Insomnia, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./Assets/13-orm-homework-demo-03.gif)


### Technical Tools 

Connects to a MySQL database using the MySQL2(https://www.npmjs.com/package/mysql) and Sequelize(https://www.npmjs.com/package/sequelize) packages.

Stores sensitive data, like a user’s MySQL username, password, and database name, using environment variables through the dotenv(https://www.npmjs.com/package/dotenv) package.

## License

![license](https://img.shields.io/badge/license-MIT-blue.svg)

## 📝 Notes

- These are the (2) items required for submission
  1.  A walkthrough video 
      
  2.  The URL of the GitHub repository that contains your code
      https://github.com/phagn131/e-commerce-back-end

## Contact Information:
- Github: [phagn13@github.com](https://github.com/phagn13@github.com)
- Email: [chloetechnologies@gmail.com](user@email.com)
