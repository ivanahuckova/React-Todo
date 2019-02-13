import React from "react";

export default class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todoInputValue: ""
		};
	}

	ChangeHandler = event => {
		this.setState({ todoInputValue: event.target.value });
	};

	AddTodoButtonClick = () => {
		this.props.AddTodo(this.state.todoInputValue);
	};

	render() {
		return (
			<div>
				<input type="text" placeholder="...todo" value={this.state.todoInputValue} onChange={this.ChangeHandler} />
				<button onClick={this.AddTodoButtonClick}>Add todo</button>
				<button>Clear completed</button>
			</div>
		);
	}
}
