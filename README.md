# BACKEND REST API
## A simple REST API Node app as per requirements given in the assignment. 

## Tech
### Backend
- [NodeJs](https://nodejs.org/en) - For server.
- [ExpressJs](https://expressjs.com/) - For simplifying api handling.
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js#readme) - For password hashing.
- [Dotenv](https://github.com/motdotla/dotenv#readme) - To load environment variables from .env into process.env.
- [http-errors](https://github.com/jshttp/http-errors#readme) - To simplyfy the error creations. 
- [JOI](https://joi.dev/api/?v=17.9.1) - For validating email and password.
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme) - For generating and validating access token.
- [Moongoose](https://mongoosejs.com/) - As ODM for MongoDB.

Some other libraries used for development.
- [Morgan](https://github.com/expressjs/morgan#readme) - For checking the apis while development.
- [Nodemon](https://nodemon.io/) - For development pupose.

## Installation

The project requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.
```sh
cd backend_restapi_sploot
npm install
```

To run the project...
```sh
cd backend_restapi_sploot
npm start
```

To run the project in development mode...
```sh
cd backend_restapi_sploot
npm run dev
```

## Provided endpoints

Here are some screenshots of the project.
1. api/signup - Route to register the user
2. api/login - Route to login a user
3. api/users/:userId - Route to update user profile (name and age).
4. api/users/:userId/articles - Route to create a new article
5. api/articles - Route to get all articles 
