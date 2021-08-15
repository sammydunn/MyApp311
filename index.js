const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const users = require('./routs/users')
const recipe = require('./routs/recipes')
const ingredient = require('./routs/igredients')

app.use(bodyParser.json());
app.use(users)

app.use(bodyParser.json());
app.use(recipe)


app.use(bodyParser.json());
app.use(ingredient)



const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log('Inside base GET route')
  res.send("Welcome to my App")
});


app.listen(port, () => {
  console.log(`Web Server is listening on port ${port}`)
})