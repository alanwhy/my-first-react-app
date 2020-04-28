import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      inputVal: ""
    }
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
  render() {
    return (
      <div>
        <input value={this.state.inputVal} onChange={this.handleInputChange.bind(this)} />
        <button onClick={this.handleBtnClick.bind(this)}>add</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index} onClick={this.deleteItem.bind(this, index)}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default TodoList;
