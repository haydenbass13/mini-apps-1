class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: HomePage,
    }
  }
  componentDidMount() {
    console.log('mounted');
  }
  render() {
    let Component = this.state.component;
    return (
    <div id='bigWrapper'>
      <Component/>
    </div>
    )};
};

//need to add click handlers for the checkout button that renders f1

var HomePage = () => (
  <button>Checkout</button>
);
//f1
var F1 = () => (
  //will be a form for account creation
    //text areas:
      //name first
      //name last
      //email --if time, verify working email
      //password 
  //should contain a next button that sends data to the db and renders f2 
      <div className="form" id="f1">
      <form >
        <input type="text" placeholder="FirstName"/>
        <input type="text" placeholder="LastName"/>
        <input type="text" placeholder="Email Address"/>
        <input type="password" placeholder="Password"/> 
        <button type="submit" id="f1Button">Next</button>
      </form>
    </div> 
);

// //f2
var F2 = () => (
//   //form for shipping information
//     //text areas:
//       //address 
//         //line one  
//         //line two (apt/unit number)
//         //city  
//         //state
//         //zipcode
//       //phone number
//   //next button sends data to db and renders f3
<div className="form" id="f2">
  <form>
    <input type="text" placeholder="Address"/>
    <input type="text" placeholder="Apt/Unit"/>
    <input type="text" placeholder="City"/>
    <input type="text" placeholder="State"/>
    <input type="text" placeholder="Zip"/>
    <input type="text" placeholder="Phone Number"/>
    <button type ="submit" id="f2Button">Next</button>
  </form>
</div>
  
);

// //f3
var F3 = (props) => (
//   //form for payment information
//   //text areas:
//   //credit card #
//   //expiry date
//   //CVV
//   //billing zip
//   //next will send data to db and render confirmation page
  <div class="form" id="f3">
    <form>
      <input type="text" placeholder="Card Number"/>
      <input type="text" placeholder="Expiration Date"/>
      <input type="text" placeholder="CVV"/>
      <input type="text" placeholder="Billing Zip"/>
      <button type="submit" id="f3Button">Next</button>
    </form>
  </div>
);

// //confirmation
//   //display all data from the db matching email and password 
//   //have a purchase button at the bottom which returns to homepage
var Confirmation = (props) => (
  <div class="form" id="confirmation">
    <h1>Confirmation</h1>

  </div>
)

ReactDOM.render(<App/>, document.getElementById('app'));