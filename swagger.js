const swaggerAutogen = require('swagger-autogen')()
const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/Routes/UserRoutes']
swaggerAutogen(outputFile, endpointsFiles) 
