import React from "react";
import Todo from "./components/TodoComponents/Todo.jsx";
import TodoForm from "./components/TodoComponents/TodoForm.jsx";

class App extends React.Component {
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
				<h2>Welcome to your Todo App!</h2>
				<Todo todos={todos} />
				<TodoForm />
			</div>
		);
	}
}

export default App;
