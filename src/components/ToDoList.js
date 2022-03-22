import React, { Component } from "react";
import TodoItem from "./ToDoItem";
import "../App.css";

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {
      list: [
        {
          id: "14",
          title: "Сделать утреннюю зарядку",
          completed: true,
        },
        {
          id: "16",
          title: "Купить продукты",
          completed: false,
        },
        {
          id: "18",
          title: "Сделать домашнее задание",
          completed: false,
        },
        {
          id: "19",
          title: "Сходить в кино",
          completed: true,
        },
        {
          id: "20",
          title: "Позвонить другу",
          completed: true,
        },
        {
          id: "55",
          title: "После разговора с другом покакать",
          completed: false,
        },
      ],
    };
  }

  deleteItem(id) {
    const list = [...this.state.list];

    const updatedList = list.filter((item) => item.id !== id);

    this.setState({
      list: updatedList,
    });
  }

  render() {
    return (
      <div className="list-container">
        {this.state.list.map((el) => (
          <TodoItem key={el.id} id={el.id} title={el.title} completed={el.completed} deleteItem={this.deleteItem} />
        ))}
      </div>
    );
  }
}
