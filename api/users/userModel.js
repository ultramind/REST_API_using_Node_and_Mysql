const pool = require('../../config/dbConnection')

module.exports = {
  // creating user
  create: (data, callBack) => {
    pool.query(
      `insert into users(firstname, lastname, email, gender, password, number)values(?,?,?,?,?,?)`,
      [
        data.firstname,
        data.lastname,
        data.email,
        data.gender,
        data.password,
        data.number
      ],
      (err, results, fields) => {
        if (err) {
          return callBack(err)
        }
        return callBack(null, results)
      }
    )
  }
}
