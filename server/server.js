require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const httpError = require('./middleware/httpError');
const notFound = require('./middleware/notFound');

const mailRoute = require('./routes/mail');

const app = express();

//for cors problem
app.use((req, res, next) => {
  res.setHeader(
    'Access-Control-Expose-Headers',
    'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', mailRoute);

app.use(httpError);
app.use(notFound);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Listening on ${PORT}`));
