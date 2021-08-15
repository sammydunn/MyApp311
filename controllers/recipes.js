const instance = require('../sql/api');

const getRecipes = (req, res) => {
  console.log("inside the GET /recipes route");
  const sql = `SELECT * FROM new_schema.recipe_table`;
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

const addRecipe = (req, res) => {
  console.log('inside the POST /addRecipe route');
  let recipe_ID = req.body.recipe_ID;
  let title = req.body.title;
  let created_by = req.body.created_by;

  const sql = `INSERT INTO users VALUES (recipe_ID, ?, ?, ?)`

  instance.query(sql, [
    recipe_ID,
    title,
    created_by
  ], (err, rows) => {
    if(error){
      console.log(`there is an error: ${error}`);
      res.status(500).send(`internal service error`)
    } else {
      res.json("Recipe Created")
    }
  })
}

const updateRecipe = (req, res) => {
  console.log('Inside the PUT /editRecipe route')
  let recipe_ID = req.body.recipe_ID;
  let title = req.body.title;
  let created_by = req.body.created_by;

  let sql = `UPDATE recipe_table SET
  recipe_ID = ?,
  title = ?,
  created_by = ?
  WHERE recipe_ID = ${req.params.id}
  `
  let body = [];

  body.push(recipe_ID, title, created_by)

  instance.query(sql, body, function(err){
    if(error){
      console.log(`there is an error: ${error}`);
      res.status(500).send(`internal service error`)
    } else {
      res.json("Recipe Updated")
    }
  })
}

const deleteRecipe = () => {
  console.log('Inside the DELETE /deleteRecipe route')
  let sql = `DELETE FROM users where Recipe_ID = ${req.params.id}`

  instance.query(sql, function(err){
    if(error){
      console.log(`there is an error: ${error}`);
      res.status(500).send(`internal service error`)
    } else {
      res.json("Recipe Deleted")
    }
  })
}



module.exports = {getRecipes, addRecipe, updateRecipe, deleteRecipe}