const instance = require('../sql/api');

const getUsers = (req, res) => {
  console.log("inside the GET /users route");
  const sql = `SELECT * FROM new_schema.users`;
  instance.query(sql, function(error, results){
    console.log(results)
    if(error){
      console.log(`there is an error: ${error}`);
      res.status(500).send(`internal service error`)
    } else {
      res.json(results)
    }
  })
};

const addUser = (req, res) => {
  console.log('inside the POST /addUser route');
  let users_name = req.body.users_name;
  let email = req.body.email;
  let login_pwd = req.body.login_pwd

  const sql = `INSERT INTO users VALUES (user_id, ?, ?, ?)`

  instance.query(sql, [
    users_name,
    email,
    login_pwd
  ], (err, rows) => {
    if(error){
      console.log(`there is an error: ${error}`);
      res.status(500).send(`internal service error`)
    } else {
      res.json("User Created")
    }
  })
};

const updateUser = (req, res) => {
  console.log('Inside the PUT /editUser route')
  let users_name = req.body.usersName;
  let email = req.body.email;
  let login_pwd = req.body.login_pwd

  let sql = `UPDATE users SET
  users_name = ?,
  email = ?,
  login_pwd = ?
  WHERE user_id = ${req.params.id}
  `
  let body = [];

  body.push(users_name, email, login_pwd)

  instance.query(sql, body, function(err){
    if(error){
      console.log(`there is an error: ${error}`);
      res.status(500).send(`internal service error`)
    } else {
      res.json("User Updated")
    }
  })
}


const deleteUser = () => {
  console.log('Inside the DELETE /deleteUser route')
  let sql = `DELETE FROM users where user_id = ${req.params.id}`

  instance.query(sql, function(err){
    if(error){
      console.log(`there is an error: ${error}`);
      res.status(500).send(`internal service error`)
    } else {
      res.json("User Deleted")
    }
  })
}


module.exports = {getUsers, addUser, updateUser, deleteUser}
