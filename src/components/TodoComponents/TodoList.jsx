import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos }) {
	return todos.map(todo => (
		<div key={todo.id}>
			<Todo todo={todo} />
		</div>
	));
}
