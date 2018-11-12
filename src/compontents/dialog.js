import React , { Component } from 'react'
class Dialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <div>
        <div className="container">
            <div class="avator"></div>
            <button id="scale">按钮</button>
            <p>bulr shadow</p>
        </div>
        
        <div>
            <p className="pink">PINK</p>
        </div>
        <div>
            <p className="orange">Box-Shadow</p>
        </div>
        <div>
            <p className="yellow">YELLOW</p>
        </div>
        <div className="linear">
        </div>
        <div id="dou"><div className="douyin"></div></div>

        <DialogBox
        title={'弹出框'}
        message={'这是一个弹框'}
        >
          <div>
            输入： <input value={this.state.value} onChange={this.handleChange.bind(this)}/>
            <button>点击</button>
          </div>
        </DialogBox>
        <br/>
        <NameForm/>
      </div>
    )
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }
}

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
function DialogBox (props) {
  return (
    <FancyBorder color={'red'}>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
      {props.children}
    </FancyBorder>
  )
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
  }
  handleSubmit(event) {
    event.preventDefault();
    // alert(`Selected file - ${this.fileInput.files[0].name}`)
    console.log('123',this.fileInput.files);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}  className={'FancyBorder FancyBorder-red'}>
        <label>
          Name:
          <input type="file" ref={(input) => this.fileInput = input} />
        </label>
        <input type="submit" value="Submit" />
        <Test/>
      </form>
    );
  }
}
function Test (props) {
  return <div>
    <form >
    < input type="text"/>
    </form>
  </div>
}
export default Dialog



