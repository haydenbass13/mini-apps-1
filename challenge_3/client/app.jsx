class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('mounted');
  }
  render() {
    return (
    <div id='bigWrapper'>
      <button>Checkout</button>
    </div>
    )};
};

//need to add click handlers for the checkout button that renders f1

//f1
  //will be a form for account creation
    //text areas:
      //name first
      //name last
      //email --if time, verify working email
      //password 
  //should contain a next button that sends data to the db and renders f2

//f2
  //form for shipping information
    //text areas:
      //address 
        //line one  
        //line two (apt/unit number)
        //city  
        //state
        //zipcode
      //phone number
  //next button sends data to db and renders f3

//f3
  //form for payment information
    //text areas:
      //credit card #
      //expiry date
      //CVV
      //billing zip
  //next will send data to db and render confirmation page

//confirmation
  //display all data from the db matching email and password 
  //have a purchase button at the bottom which returns to homepage

ReactDOM.render(<App/>, document.getElementById('app'));