import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos }) {
	return todos.map((todo, idx) => (
		<div key={todo.id} id={idx}>
			<Todo todo={todo} />
		</div>
	));
}
