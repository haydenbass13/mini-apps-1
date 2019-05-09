class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleAjax = this.handleAjax.bind(this);
    this.state = {
      component: HomePage,
    }
  }
  componentDidMount() {
    console.log('mounted')
  }
  async handleAjax(stateObj) {
    const response = await fetch(stateObj.url, {
      method: stateObj.method,
      body: JSON.stringify(stateObj),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    });
  }

  handleClick(stateObj) {
    event.preventDefault();
    let state = { component: stateObj.next }
    this.setState(state)
    if(stateObj.url) {
      this.handleAjax(stateObj);
    }
  }

  render() {
    let Comp = this.state.component;
    return (
      <div id='bigWrapper'>
        <Comp click={this.handleClick} />
      </div>
    )
  };
};


var HomePage = (props) => (
  <button onClick={() => props.click({ next: F1 })}>Checkout</button>
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
      url: '/user',
      method: 'POST'
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({ [name]: target.value });
    // console.log(event)
  }

  render() {
    return (<div className="form" id="f1">
      <form onSubmit={() => this.props.click(this.state)}>
        <input type="text" placeholder="FirstName" name="firstName" defaultValue={this.state.firstName} onChange={this.handleChange} />
        <input type="text" placeholder="LastName" name="lastName" defaultValue={this.state.lastName} onChange={this.handleChange} />
        <input type="text" placeholder="Email Address" name="email" defaultValue={this.state.email} onChange={this.handleChange} />
        <input type="text" placeholder="Password" name="password" defaultValue={this.state.password} onChange={this.handlechange} />
        <button type="submit" id="f1Button">Next</button>
      </form>
    </div>
    )
  }
};


class F2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: F3,
      address: '',
      apt: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      url: '/shipping',
      method: "POST"
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({ [name]: target.value });
  }
  render() {
    return (<div className="form" id="f2" >
      <form onSubmit={() => this.props.click(this.state)}>
        <input type="text" placeholder="Address" name="address" defaultValue={this.state.address} onChange={this.handleChange} />
        <input type="text" placeholder="Apt/Unit" name="apt" defaultValue={this.state.apt} onChange={this.handleChange} />
        <input type="text" placeholder="City" name="city" defaultValue={this.state.city} onChange={this.handleChange} />
        <input type="text" placeholder="State" name="state" defaultValue={this.state.state} onChange={this.handleChange} />
        <input type="text" placeholder="Zip" name="zip" defaultValue={this.state.zip} onChange={this.handleChange} />
        <input type="text" placeholder="Phone Number" name="phone" defaultValue={this.state.phone} onChange={this.handleChange} />
        <button type="submit" id="f2Button">Next</button>
      </form>
    </div>
    )
  }
};


class F3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: Confirmation,
      cardNumber: '',
      exp: '',
      cvv: '',
      billZip: '',
      url: '/billing',
      method: "POST"
    }
    this.handlechange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({ [name]: target.value });
  }
  render() {
    return (<div className="form" id="f3">
      <form onSubmit={() => this.props.click(this.state)} >
        <input type="text" name="cardNumber" placeholder="Card Number" name="cardNumber" defaultValue={this.state.cardnumber} onChange={this.handleChange} />
        <input type="date" name="exp" onChange={this.handleChange}/>
        <input type="text" placeholder="CVV" name="cvv" defaultValue={this.state.cvv} onChange={this.handleChange} />
        <input type="text" placeholder="Billing Zip" name="billZip" defaultValue={this.state.billZip} onChange={this.handleChange} />
        <button id="f3Button" value="Submit" >Next</button>
      </form>
    </div>
    );
  }
}

var Confirmation = (props) => (
  <div className="form" id="confirmation">
    <h1>Confirmation</h1>
    <button onClick={() => props.click(HomePage)}>Purchase</button>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'));