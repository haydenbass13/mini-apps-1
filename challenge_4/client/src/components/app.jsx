// import '../index.css'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log('mounted')
  }
  render() {
    return (
      <div>

        <h1>rendering</h1>
        <button className="random">test</button>
      </div>
    )
  }
};
export default App;
