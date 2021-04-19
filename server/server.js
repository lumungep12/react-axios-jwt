let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let database = require('./database/db');

const userRoute = require('./routes/userRoutes');

mongoose.Promise = global.Promise;


mongoose.connect(database.db, {
    useNewUrlParser: true
}).then(() => {
    console.log('The Base Of The Data Was Successfull!! ');
}, error => {
    console.log('Failure To Connect To MongoDB' + error);
})

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/users', userRoute);

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

app.use((err, req, res, next) => {
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
})