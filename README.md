# frutika_nodejs_api

## STEPS TO CREATE SWAGGER UI
STEP 1: install pakage <br />
        ```npm i swagger-ui-express```

STEP 2: setup swagger structure same as ```/swagger``` folder

STEP 3: you need to change url in ```swagger/server.js``` file(url is your hosting url of node js app)

STEP 4:add your api information in ```swagger/swaggerApiFolder```

STEP 5:index.js file in ```swagger/swaggerApiFolder``` contains all end points and their request parameter functions

STEP 6: we can add ```swagger.index.js``` into  the root index.js:

```
const swaggerFile = require('./swagger/index')
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
```

## STEPS TO CREATE SWAGGER UI AUTOMATICALLY
step 1:install pakage <br />
        ```npm i swagger-ui-express```<br />
        ```npm i swagger-autogen```

step 2: create new directory at root of your project named ```swagger.js```<br />

 ```
  const swaggerAutogen = require('swagger-autogen')()
  const outputFile = './swagger_output.json'
  const endpointsFiles = ['./routers/personRouter.js']
  swaggerAutogen(outputFile, endpointsFiles) 
 ```
  
  The outputFile will have the file configuration about our routes that are executing on Express. The endpointFiles is our path to routes to be documented.

Step 3: In our package.json we need to add:<br />
    ```"scripts": {
      "start": "node index.js",
      "swagger-autogen": "node swagger.js"     
  },```

STEP 4: At the command line in root of our folder we can write and execute:<br />
```npm run swagger-autogen```

STEP 5:And the swagger_ouput.json will generate. And we can add into the index.js:
```const swaggerFile = require('./swagger_output.json')
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
```




