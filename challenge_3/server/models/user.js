const utils = require('../lib/hashUtils');
const Model = require('./model');

class Users extends Model {
  constructor() {
    super('users');
  }

  compare(attempted, password, salt) {
    return utils.compareHash(attempted, password, salt);
  }

  create({ username, password }) {
    let salt = utils.createRandom32String();

    let newUser = {
      username,
      salt,
      password: utils.createHash(password, salt)
    };

    return super.create.call(this, newUser);
  }

}
module.exports = new Users();