import React, { Component } from 'react';
class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      text: '123',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  render() {
    return (
      <div>
        <p>父组件通信count{this.props.count}</p>
        <h3 id="todo">TODO</h3>
        <form onSubmit={this.handleSubmit}>
          <TodoList items={this.state.items}></TodoList>
          <input 
            onChange={this.handleChange.bind(this)}
            value={this.state.text}/>
            <button>
              Add #{this.state.items.length + 1}
            </button>
            <button onClick={this.testClick}>点击</button>
        </form>
      </div>
    )
  }
  testClick = (e) => {
     console.log(this);
  }
  handleChange(e) {
    this.setState({ text: e.target.value })
  }
  handleSubmit(e) {
   e.preventDefault()
   if (this.state.text.length == 0) {
     return
   }
   const newItem = {
     text: this.state.text,
     id: new Date()
   }
   this.setState(prevState => ({
     items: prevState.items.concat(newItem),
     text: '',
   }))
  }
} 

function TodoList (props) {
  return <ul>
    { props.items.map((item , idx) => {
       return <li key={idx}>{item.text}</li>
      })
    }
  </ul>
}

export default Todo