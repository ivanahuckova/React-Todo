import React from "react";
import TodoList from "./components/TodoComponents/TodoList.jsx";

class App extends React.Component {
	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<TodoList />
			</div>
		);
	}
}

export default App;
