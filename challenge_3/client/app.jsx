class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      component: HomePage,
    }
  }
  componentDidMount() {
    console.log(this.state.component)
  }
  handleClick(target) {
    let state = {component : target}
    this.setState(state)
  }

  render() {
    let Comp = this.state.component;
    return (
      <div id='bigWrapper'>
        <Comp click={this.handleClick}/>
      </div>
    )
  };
};


var HomePage = (props) => (
  <button onClick={()=>props.click(F1)}>Checkout</button>
);

var F1 = (props) => (

  <div className="form" id="f1">
    <form onSubmit={()=>props.click(F2)}>
      <input type="text" placeholder="FirstName" />
      <input type="text" placeholder="LastName" />
      <input type="text" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <button type="submit" id="f1Button" next="F2">Next</button>
    </form>
  </div>
);

var F2 = (props) => (

  <div className="form" id="f2" >
    <form onSubmit={()=>props.click(F3)}>
      <input type="text" placeholder="Address" />
      <input type="text" placeholder="Apt/Unit" />
      <input type="text" placeholder="City" />
      <input type="text" placeholder="State" />
      <input type="text" placeholder="Zip" />
      <input type="text" placeholder="Phone Number" />
      <button type="submit" id="f2Button">Next</button>
    </form>
  </div>

);

var F3 = (props) => (
  <div className="form" id="f3">
    <form onSubmit={()=>props.click(Confirmation)} >
      <input type="text" name="cardNumber" placeholder="Card Number" />
      <input type="text" placeholder="Expiration Date" />
      <input type="text" placeholder="CVV" />
      <input type="text" placeholder="Billing Zip" />
      <button id="f3Button" value="Submit" >Next</button>
    </form>
  </div>
);

var Confirmation = (props) => (
  <div className="form" id="confirmation">
    <h1>Confirmation</h1>
    <button onClick={()=>props.click(HomePage)}>Purchase</button>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'));