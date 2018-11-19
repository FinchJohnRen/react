import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todolist from './compontents/todo'
import Test from './compontents/test'
import FromCompo from './compontents/form'
import Calculator from './compontents/state'
import Temperature from './compontents/temperature'
import Dialog from './compontents/dialog'
import FilterableProductTable from './compontents/filter'
import RouterTest from './compontents/routerTest'
import Csstest from './compontents/css'
class FormattedDate extends React.Component {
  render() {
    return <h2 className="time">现在是 {this.props.date.toLocaleTimeString()}.</h2>;
  }
}
class CountAdd extends React.Component {
  render() {
    return <h3>count: {this.props.count}</h3>;
  }
}
function say(target) {
  target.prototype.say = function (msg) {
    console.log(msg);
  }
}
class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      age: 0,
      count: 0,
      temperature: '',
      scale: 'c'
    };
    this.myRef = React.createRef()
    this.iptRef = null
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  componentDidMount() {
    console.log('123',this.myRef.current);
    console.log(this.iptRef);
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.addCount = setInterval(() => this.count(), 1000)
  }
 
  componentWillUnmount() {
    clearInterval(this.timerID)
    clearInterval(this.count)
  }
 
  tick() {
    this.setState({
      date: new Date()
    });
  }
  count () {
    this.setState({
      count: this.state.count + 1
    })
  }
  sayHello() {
    console.log('今年' + this.age + '了');
  }
  ActionLink(e) {
    e.preventDefault();
    console.log('链接被点击');
  }

  //温度
  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }
  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    var celsius = scale == 'f' ? tryCovert(temperature, toCelsius) : temperature
    var fahrenheit  = scale == 'c' ? tryCovert(temperature, toFahrenheit) : temperature
    return (
      <div>
        <RouterTest/>
        {logo}
        <button onClick={this.ActionLink} age={this.state.age}>
          激活按钮
        </button>
        <h1 className="sticky">Hello, world!</h1>
        <FormattedDate ref={this.myRef} date={this.state.date}></FormattedDate>
        <CountAdd count={this.state.count}></CountAdd>
        <Todolist count={this.state.count}></Todolist>
        <Test/>
        <FromCompo/>
        <br/>
        <Calculator 
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <Calculator 
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}/>
          <br/>
        <Temperature/>
        <br/>
        <Dialog/>
        <br/>
        <FilterableProductTable/>
        <br/>
        <CustomTextInput iptRef={el => this.iptRef = el }/>
        <Csstest/>
      </div>
    );
  }
}

function toCelsius(fahrenheit) {
  console.log(12312312);
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
function tryCovert (temperature, covert) {
  const input = parseFloat(temperature);
  if(Number.isNaN(input)) {
    return ''
  }
  const output = covert(input)
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function CustomTextInput(props) {
  // 这里必须声明 textInput，这样 ref 回调才可以引用它
  let textInput = null;

  function setIptRef (el) {
     textInput = el
  } 

  function handleClick() {
    textInput.focus();
  }
  return (
    <div>
      <input
        type="text"
        ref={setIptRef} />

      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
    </div>
  );  
}
export default App;