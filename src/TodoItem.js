import React, { Component } from "react"

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.deleteItem = this.deleteItem.bind(this)
  }
  deleteItem() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
  render() {
    const { content } = this.props
    return (
      <div onClick={this.deleteItem}>{content}</div>
    )
  }
}

export default TodoItem