const basicInfo = require('./basicInfo');
const servers = require('./server');
const components = require('./Componant');
const tags = require('./tags');
const swaggerapi = require('./SwaggerApi/index')

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...swaggerapi
};