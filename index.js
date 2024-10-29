const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json("Hello world!")
});

app.get('/cars', (req, res) => {
  res.json([
    {
      "id": "1",
      "make": "Toyota",
      "model": "Camry",
      "year": 2020
    },
    {
      "id": "2",
      "make": "Honda",
      "model": "Accord",
      "year": 2019
    },
    {
      "id": "3",
      "make": "Ford",
      "model": "Mustang",
      "year": 2021
    }
  ]);
});

app.listen(3000, () => {
  console.log('listening for requests on port 3000')
})