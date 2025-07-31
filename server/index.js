const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const todoRoutes = require('./routes/todoRoute');

dotenv.config();

const PORT = 5000;
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

app.use('/api', todoRoutes);

app.get('/', (req, res) => {
  res.send('This is the todo GET route');
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DB Connected');
    app.listen(PORT, () => {
      console.log('Listening on PORT: ', PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
