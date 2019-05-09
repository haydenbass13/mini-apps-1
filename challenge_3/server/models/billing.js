const utils = require('../lib/hashUtils');
const Model = require('./model');

class BillingInfo extends Model {
  constructor() {
    super('users');
  }


  create({firstName, lastName, email, password}) {
    let salt = utils.createRandom32String();

    let newUser = {
      firstName,
      lastName,
      email,
      pass: utils.createHash(password, salt),
      salt,
    };

    return super.create.call(this, newUser);
  }

}
module.exports = new BillingInfo();