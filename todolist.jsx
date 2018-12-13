import React, { Component } from 'react'

class Todolist extends Component {
  constructor(props) {
    super(props)
    this.state.props = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }
} 
  handleInput = e => {
    console.log('input')
  }

  
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }
  
  createItems = item => {
    return (
      <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
        {item.text}
      </li>
    )
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }

  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createItems)
      return (
       <div className="todoListMain">
          <div className="header">
            <form onSubmit={this.props.addItem}>
              <input
                placeholder="Item"
                ref={this.props.inputElement}
                value={this.props.currentItem.text}
                onChange={this.props.handleInput}
              />
              <button type="submit"> Add Item</button>
            </form>
          </div>
        </div>
      );
  }
}
export default Todolist();
