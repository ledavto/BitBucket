const app = require('./app');
const mongoose = require('mongoose');
require('colors');

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('Database connection successful'.bgBrightGreen);
    app.listen(PORT);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });

//   DB_HOST =
//     'mongodb+srv://user-butbucket:8oRaKca2NfcsQpf@cluster0.4dvwoew.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
//   PORT = 3000;
