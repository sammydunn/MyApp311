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




module.exports = {getRecipes}