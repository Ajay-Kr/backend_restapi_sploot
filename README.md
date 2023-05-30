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
- [Morgan]([https://github.com/expressjs/morgan](https://github.com/expressjs/morgan#readme)) - For checking the apis while development.
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
1. api/signup

Successful signup
<img 
     src="https://github.com/Ajay-Kr/backend_restapi_sploot/assets/55989070/9674f11e-9390-4b59-adc3-49a8d4fe9f27" 
     data-canonical-src="https://github.com/Ajay-Kr/backend_restapi_sploot/assets/55989070/9674f11e-9390-4b59-adc3-49a8d4fe9f27" 
     width="700" align="center"
/>
Conflict Error
<img 
     src="https://github.com/Ajay-Kr/backend_restapi_sploot/assets/55989070/106af411-ba67-4d4c-a504-a88102ee757e" 
     data-canonical-src="https://github.com/Ajay-Kr/backend_restapi_sploot/assets/55989070/106af411-ba67-4d4c-a504-a88102ee757e" 
     width="700" align="center"
/>
Password Mismatch


On clicking the Run button, if the input is not empty the api is called...

Empty input...

<img 
     src="https://github.com/Ajay-Kr/sentimentAnalysisNodeJs/assets/55989070/fc45566f-73be-4f45-a337-496fabbd62d4" 
     data-canonical-src="https://github.com/Ajay-Kr/sentimentAnalysisNodeJs/assets/55989070/fc45566f-73be-4f45-a337-496fabbd62d4" 
     width="700" align="center"
/>

Processing...

<img 
     src="https://github.com/Ajay-Kr/sentimentAnalysisNodeJs/assets/55989070/c51fe0e5-cb17-44dd-b491-23147656f967" 
     data-canonical-src="https://github.com/Ajay-Kr/sentimentAnalysisNodeJs/assets/55989070/c51fe0e5-cb17-44dd-b491-23147656f967" 
     width="700" align="center"
/>

On receiving the result output is shown...

<img 
     src="https://github.com/Ajay-Kr/sentimentAnalysisNodeJs/assets/55989070/801cefb0-f288-4577-8d5d-66ed759d5f7c"
     data-canonical-src="https://github.com/Ajay-Kr/sentimentAnalysisNodeJs/assets/55989070/801cefb0-f288-4577-8d5d-66ed759d5f7c"
     width="700" align="center" 
/>                

