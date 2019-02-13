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

	AddTodo = todoName => {
		this.setState(state => ({
			todos: state.todos.concat({ task: todoName, id: "500", completed: false })
		}));
	};
	render() {
		const { todos } = this.state;
		return (
			<div>
				<Todo todos={todos} />
				<TodoForm AddTodo={this.AddTodo} />
			</div>
		);
	}
}

export default TodoList;
