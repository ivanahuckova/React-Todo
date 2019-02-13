import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm.jsx";

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{
					task: "Organize Garage",
					id: 1528817077286,
					completed: false
				},
				{
					task: "Bake Cookies",
					id: 1528817084358,
					completed: false
				}
			]
		};
	}

	render() {
		const { todos } = this.state;
		return (
			<div>
				<Todo todos={todos} />
				<TodoForm />
			</div>
		);
	}
}

export default TodoList;
