import React, { Component } from "react";

export default class ToDoItem extends Component {
  render() {
    return (
      <div>
        <ul>
          <li className={this.props.completed ? "done" : "undone"}>
            {this.props.title}
            <button onClick={() => this.props.deleteItem(this.props.id)} className="btn">
              x
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
