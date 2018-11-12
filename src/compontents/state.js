import React , { Component } from 'react'
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}
class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: '',
    }
  }
  handleChange(e) {
    // this.setState({temperature: e.target.value})
    this.props.onTemperatureChange(e.target.value);
  }
  render() {
    // const temperature = this.state.temperature
    const temperature = this.props.temperature
    const scale = this.props.scale
    return <div>
      <h2>温度组件</h2>
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange.bind(this)}/>
        <BoilingVerdict celsius={parseFloat(temperature)}/>
      </fieldset>
      <h2>重新渲染</h2>
      <CounterButton/>
    </div>
  }
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return  <p>水会烧开</p>;
  }
  return <p>水不会烧开</p>;
}
// 重新渲染
class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps,nextState);
    if (this.props.color !== nextProps.color) {
      return true;
    }
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
    );
  }
}
export default Calculator