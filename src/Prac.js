import React from "react";

const TodoList = ({ todo }) => <li>{todo}</li>;

class Prac extends React.Component {
  state = {
    todoList: ["Python", "Django"],
    current: '',
  }

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      current: value,
    })
  }

  onKeyDown = (e) => {
    if(e.keyCode === 13){
      const { current, todoList } = this.state;
      this.setState({
        current: '',
        todoList: [...todoList, current],
      });
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.todoList.map((todo, idx) => (
            <TodoList todo={todo} key={idx} />
          ))}
        </ul>
        <input value={this.state.current} onChange={this.onChange} onKeyDown={this.onKeyDown} />
        <hr />
        {JSON.stringify(this.state)}
      </div>
    )
  }
}
export default Prac;