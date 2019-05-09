class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      component: F1,
    }
  }
  componentDidMount() {
    console.log('mounted')
  }
  handleClick(stateObj) {
    event.preventDefault();
    console.log(stateObj)
    let state = {component : stateObj.next }
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

class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: F2,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      url: '/user'
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({[name]: target.value});
    // console.log(event)
  }

  render() {
    return (<div className="form" id="f1">
    <form onSubmit={()=>this.props.click(this.state)}>
      <input type="text" placeholder="FirstName" name="firstName" defaultValue={this.state.firstName} onChange={this.handleChange} />
      <input type="text" placeholder="LastName" name="lastName" defaultValue={this.state.lastName} onChange={this.handleChange} />
      <input type="text" placeholder="Email Address" name="email" defaultValue={this.state.email} onChange={this.handleChange} />
      <input type="password" placeholder="Password" name="password"  defaultValue={this.state.password} onChange={this.handlechange}/>
      <button type="submit" id="f1Button">Next</button>
    </form>
  </div>
  )
  }
};

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