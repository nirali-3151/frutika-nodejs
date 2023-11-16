const express = require('express'); //set up middlewares to respond to HTTP Requests
const bodyParser = require("body-parser");//process JSON data
var multer = require('multer');
const cors = require("cors");//interact with resources from a different origin
//define routes
const routes = require('./src/Routes');

//import swagger ui
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = require('./swagger/index')
// const doc = require('./swagger_output.json')


const port = process.env.PORT || 8080;
var upload = multer();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
//for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.use(express.json());

//use swagger ui
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

// Handling Errors
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});

app.use('/catagory-image' ,express.static("catagories"));

app.use(routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
