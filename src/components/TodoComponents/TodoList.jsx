import React from "react";
import Todo from "./Todo";
import "./Todo.css";
export default function TodoList({ todos }) {
	// ClickToToggleCompleted = () => {
	// 	this.props.ToggleCompleted();
	// };

	return todos.map((todo, idx) => (
		<div className="todo-items-container" /*onClick={this.ClickToToggleCompleted}*/ key={todo.id} id={`task${idx}`}>
			<Todo todo={todo} />
		</div>
	));
}
