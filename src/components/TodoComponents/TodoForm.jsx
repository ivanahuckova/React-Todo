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

	render() {
		return (
			<div>
				<input type="text" placeholder="...todo" value={this.state.todoInputValue} onChange={this.ChangeHandler} />
				<button>Add todo</button>
				<button>Clear completed</button>
			</div>
		);
	}
}
