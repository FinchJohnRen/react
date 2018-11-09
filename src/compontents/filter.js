import React , {Component} from 'react';
class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: '',
      check: true,
    }
  }

  render () {
    const JSON = [
      {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
      {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
      {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
      {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
      {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
      {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ];
    return (
      <div>
        {this.state.check && <SearchBar/>}
      </div>
    )
  }
}

export default FilterableProductTable

function SearchBar(props) {
  return (
    <React.Fragment>
      <input value={props.inputText}/>
      <input type="checkbox"/> only show product in stock
    </React.Fragment>
  )
}
// function ProductTable(props) {
//   return (
//     <div>
//       <span><b>Name</b></span><span><b>Price</b></span>
//       {
//         props.data.map((item, idx) => {
//           return (
//             <ProductCategoryRow title={item.category}/>
//           )
//         })
//       }
//     </div>
//   )
// }
// function ProductCategoryRow(props) {
//   return (
//     <div>
//       <h5>{props.title}</h5>
//     </div>
//   )
// }
// function ProductRow (props) {
//   return (
//     <div>
//       <span>{props.name}</span>
//       <span>{props.price}</span>
//     </div>
//   )
// }