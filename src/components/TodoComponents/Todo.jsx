import React from "react";

export default function Todo({ todos }) {
	return todos.map(todo => <div key={todo.id}>{todo.task}</div>);
}
