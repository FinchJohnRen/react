import React , { Component} from 'react'
class FromCompo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '123123',
      selectVal: '',
      valArr: ['js', 'html', 'css'],
      isGoing: false,
      guest: 2,
    }
  }
  handleSubmit (e) {
    e.preventDefault()
    alert(this.state.value)
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  handleSelectChange(e) {
    this.setState({ selectVal: e.target.value})
  }
  handleInputChange(e) {
    const target = e.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name] :value
    })
  }
  render() {
    return (
      <div>
        表单:
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Name:
            <input typ="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
          </label>
          <label>
            text:
            <textarea  value={this.state.value} onChange={this.handleChange.bind(this)} />
          </label>
          <br/>
          <Select onChange={this.handleSelectChange.bind(this)}  valArr={this.state.valArr}/>
          <br/>
          多个输入法
          <label>
            isGoing
            <input 
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange.bind(this)}/>
          </label>
          <br/>
          <label>
            Number of guest:
            <input
              name="guest"
              type="number"
              value={this.state.guest}
              onChange={this.handleInputChange.bind(this)}/>
          </label>
          <input type="Submit" value="Submit" readOnly/>
        </form>
      </div>
    )
  }
}

function Option(props) {
  return <option value={props.value}> { props.value} </option>
}
function Select(props)　{
  let arr = props.valArr
  let opt = arr.map(val => <Option key={val} value={val}/>)
  return <select onChange={props.onChange} value={props.value}>{opt}</select>
}
export default FromCompo