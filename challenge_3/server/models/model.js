var db = require('../db');

// const executeQuery = (q, vals) => {
//   return db.queryAsync(q, vals).spread(results => results);
// };


class Model {
  constructor(tablename) {
    this.tablename = tablename;
  }

  get(options) {
    let parsedOptions = parseData(options);
    let queryString = `SELECT * FROM ${this.tablename} WHERE ${parsedOptions.string.join(' AND ')} LIMIT 1`;
    return db.query(queryString, parsedOptions.values).then(results => results[0]);
  }

  create(options) {
    let queryString = `INSERT INTO ${this.tablename} SET ?`;
    return db.query(queryString, options);
  }
  update(email, update) {
    let queryString = `UPDATE ${this.tablename} 
    SET ${update} 
    WHERE email = '${email}'`;
    console.log(queryString);
    return db.query(queryString);
  }


}

module.exports = Model;