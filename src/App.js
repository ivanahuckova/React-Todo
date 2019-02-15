import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./App.css";

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

	AddTodo = todoName => {
		this.setState(state => ({
			todos: state.todos.concat({ task: todoName, id: Date.now(), completed: false })
		}));
	};

	// ToggleCompleted = () => {
	// 	this.setState(state => ({ state.todos.completed: !state.todos.completed.completed }));
	//   };

	render() {
		const { todos } = this.state;
		return (
			<div className="environment-container">
				<div className="todo-container">
					<h2>Welcome to your Todo App!</h2>
					<TodoList todos={todos} />
					<TodoForm AddTodo={this.AddTodo} />
				</div>
			</div>
		);
	}
}

export default App;
