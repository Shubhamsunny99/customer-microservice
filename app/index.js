// to define express application

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const customerRoutes = require('./routes/customer.route')

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use("/customers", customerRoutes)


const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get("/health", (req, res) => {
    res.send("OK")
})



module.exports = app;