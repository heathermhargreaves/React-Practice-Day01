// var React = require('react');
import React from 'react';
import ReactDOM from 'react-dom';


var App = React.createClass({
  //ES 6
  getInitialState() {
    return ({
      name: 'Heather',
      tempName: '',
      list: ["1","2","3"],
    })
  },
  render() {
    return (
      <div>
        <div onClick={this.handleClick}>
          {this.state.name}
        </div>
        <input onChange={this.handleChange}/>
        {this.state.list.map(value => {
          return (
              <div key={value}>{value}</div>
              //key is letting react know that these things in the list are different
          )
        })}
      </div>
    )
  },
  handleChange(event) {
    this.setState({
      tempName: event.target.value,
    })
  },
  handleClick() {
    this.setState({
      name: this.state.tempName,
    })
  }
})

ReactDOM.render(<App2 />, document.getElementById("app2"));
