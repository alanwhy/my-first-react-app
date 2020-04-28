import React from 'react';
import TodoItem from "./TodoItem"

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      inputVal: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputVal],
      inputVal: ""
    })
  }
  handleInputChange(e) {
    this.setState({
      inputVal: e.target.value
    })
  }
  deleteItem(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({ list })
  }

  getTodoItem() {
    return (
      this.state.list.map((item, index) => {
        return <TodoItem content={item} key={index} index={index} deleteItem={this.deleteItem} />
      })
    )
  }
  render() {
    return (
      <div>
        <input value={this.state.inputVal} onChange={this.handleInputChange} />
        <button onClick={this.handleBtnClick}>add</button>
        <ul>{this.getTodoItem()}</ul>
      </div>
    )
  }
}

export default TodoList;
