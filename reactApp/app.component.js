import React from 'react';
import ReactDOM from 'react-dom';

var App = React.createClass({
  getInitialState() {
    return {
      list: [],
      name: 'Todo App',
      currentItem: "",
    }
  },

  render() {
    return (
      <div>
        <input value={this.state.currentItem} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
        {this.state.list.map((value, index) => {
          return (
            <div>
              {value}
              <a href="#"
              onClick={this.handleRemove.bind(this, index)}
              key={index}>
              Delete this</a>
              </div>
          )
        })}

      </div>
    )
  },

  handleRemove(removeIndex) {
    //same thing as the filter, 
    // var newArr = this.state.list.slice();
    // newArr.splice(removeIndex, 1);
    // this.setState({
    //   list: newArr,
    // });
    this.setState({
      list: this.state.list.filter((value, index) => index !== removeIndex),
    });
  },

  handleClick() {
    this.setState({
      list: this.state.list.concat([this.state.currentItem]),
      currentItem: '',
    })
  },

  handleChange(e) {
    this.setState({
      currentItem: e.target.value,
    })
  },

})

ReactDOM.render(<App />, document.getElementById("app"));
