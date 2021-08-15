const instance = require('../sql/api');

const getIngredient = (req, res) => {
  console.log("inside the GET /ingredient route");
  const sql = `SELECT * FROM new_schema.ingredient_table`;
  instance.query(sql, function(error, results){
    console.log(results)
    if(error){
      console.log(`there is an error: ${error}`);
      res.status(500).send(`internal service error`)
    } else {
      res.json(results)
    }
  })
}

const addIngredient = (req, res) => {
  console.log('inside the POST /addIngredient route');
  let ingredient_ID = req.body.ingredient_ID;
  let ingredient = req.body.ingredient;
  
  const sql = `INSERT INTO users VALUES (ingredient_ID, ?, ?, ?)`

  instance.query(sql, [
    ingredient_ID,
    ingredient
  ], (err, rows) => {
    if(error){
      console.log(`there is an error: ${error}`);
      res.status(500).send(`internal service error`)
    } else {
      res.json("Ingredient Created")
    }
  })
}

const updateIngredient = (req, res) => {
  console.log('Inside the PUT /editIngredient route')
  let ingredient_ID = req.body.ingredient_ID;
  let ingredient = req.body.ingredient;

  let sql = `UPDATE ingredient_table SET
  ingredient_ID = ?,
  ingredient = ?,
  WHERE ingredient_ID = ${req.params.id}
  `
  let body = [];

  body.push(ingredient_ID, ingredient)

  instance.query(sql, body, function(err){
    if(error){
      console.log(`there is an error: ${error}`);
      res.status(500).send(`internal service error`)
    } else {
      res.json("Ingredient Updated")
    }
  })
}

const deleteIngredient = () => {
  console.log('Inside the DELETE /deleteIngredient route')
  let sql = `DELETE FROM users where Recipe_ID = ${req.params.id}`

  instance.query(sql, function(err){
    if(error){
      console.log(`there is an error: ${error}`);
      res.status(500).send(`internal service error`)
    } else {
      res.json("Ingredient Deleted")
    }
  })
}

module.exports = {getIngredient, addIngredient, updateIngredient, deleteIngredient}