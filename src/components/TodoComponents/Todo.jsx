import React from "react";

export default function Todo({ todo }) {
	console.log(todo);
	return <div key={todo.id}>{todo.task}</div>;
}
