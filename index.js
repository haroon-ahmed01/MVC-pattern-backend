const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

//DB Connection
const db = require('./DB/connection/db')
const dbConnect = async () => {
    const connectionMessage = await db();
    console.log(connectionMessage);
};
dbConnect();

//Routers
const demoRouter = require('./routes/Demo')


app.use('/demo', demoRouter)

app.listen(5006, () =>
    console.log(`Server listening on port ${5006}`)
)