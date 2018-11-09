import React , { Component } from 'react'
class Test extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      switch: false,
      param: '默认参数',
    }
  }
  componentDidMount () {
    function Class1(){   
      this.name=function(){   
        console.log("我是class1内的方法");   
      }   
    }   
    function Class2(){ 
      Class1.call(this);    
    }
    var f = new Class2()
    f.name()
    function eat(x,y){   
      console.log(x+y);   
    }   
    function drink(x,y){   
      console.log(x-y);   
    }   
    eat.call(drink,3,2);

    function bar () {
      console.log(this.x);
    }
    var foo = {x: 3}
    bar.bind(foo)()
    var array1 = [12 , "foo" , {name:"Joe"} , -2458]; 
    var array2 = ["Doe" , 555 , 100]; 
    Array.prototype.push.apply(array1, array2);
    
    // console.log(array1);
  }
  handleLogin () {
    console.log(this);
    this.setState({
      condition: true
    })
  }
  handleLogout () {
    this.setState({
      condition: false
    })
  }
  render () {
    let isLogin = this.state.condition;
    let button = null
    if (isLogin) {
      button = <LoginOut onClick={this.handleLogout.bind(this)}/>
    } else {
      button = <LoginIn onClick={this.handleLogin.bind(this)}/>
    }
    return (
      <div>
        <h1>测试</h1>
        <div>
          <p>开关: {this.state.switch ? '开' : '关'},{this.state.param}</p>
          <button onClick={this.switch.bind(this, 'parm')}>开关按钮</button>
        </div>
        <div>
          /条件渲染/
          <Condition condition={this.state.condition} />
          {button}
        </div>

        <FancyBorder left={
          <span>左</span>
        }
        right={
          <span>右</span>
        }
        >
         FancyBorder
        </FancyBorder>
      </div>
    )
  }
  switch (param,e) {
    e.preventDefault()
    this.setState(prevState => ({
      switch: !prevState.switch,
      param: param
    }))
  }
}

function First(props) {
  return <h1>第一个组件 登录状态</h1>
}
function Second(props) {
  return <h1>第er个组件 登出状态</h1>
}
function Condition(props) {
  let condition = props.condition
  let status = condition?'true':'false'
  let first = <div> <First condition={condition}/> 状态 {status}</div>
  let second = <div> <Second condition={condition}/> 状态{status}</div>
  return condition ? first : second
}

function LoginIn(props) {
  return <button onClick={props.onClick}>登录</button>
}
function LoginOut(props) {
  return <button onClick={props.onClick}>登出</button>
}
function FancyBorder(props) {
  return (
    <div>
      <h3>嵌套组件</h3>
      {props.children}
      <div>
        多组件嵌套
        <br/>
        <div>{props.left}</div>
        <div>{props.right}</div>
      </div>
      <br/>>
    </div>
  )
}
export default Test