const utils = require('../lib/hashUtils');
const Model = require('./model');

class ShippingInfo extends Model {
  constructor() {
    super('users');
  }


  create({address, apt, city, state, zip, phone}) {

    let newShip = {
      address,
      apt, 
      city,
      state,
      zip,
      phone
    };

    return super.create.call(this, newShip);
  }

}
module.exports = new ShippingInfo();