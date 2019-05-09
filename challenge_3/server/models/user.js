const utils = require('../lib/hashUtils');
const Model = require('./model');

class Users extends Model {
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
  addShipping({address, apt, city, state, zip, phone, email}) {

    // let newShip = {
    //   address,
    //   apt, 
    //   city,
    //   state,
    //   zip,
    //   phone, 
    //   email
    // };
    let update = `address = '${address}', aptUnit = '${apt}', city = '${city}', st = '${state}', zip = '${zip}', phone = '${phone}'`

    return super.update.call(this, email, update);
  }

  addBilling({firstName, lastName, email, password}) {

    let newBill = {

    };

    return super.create.call(this, newBill);
  }


}
module.exports = new Users();