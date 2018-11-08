import React, { PureComponent } from 'react';
import getGraphQlData from './api';
import './css/normalize.css';
import './css/skeleton.css';
import './css/index.css';

class List extends PureComponent {
	render() {
		const itemNode = this.props.todos.map(todo => {
			return <Todo todo={todo.item} key={todo._id} />;
		});
		return <ul>{itemNode}</ul>;
	}
}

class Todo extends PureComponent {
	render() {
		return <li>{this.props.todo}</li>;
	}
}

class App extends PureComponent {
	constructor() {
		super();
		this.state = {
			todos: [],
			value: '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.createNewTodo = this.createNewTodo.bind(this);
	}

	componentDidMount() {
		this.getAllTodos();
	}

	getAllTodos () {
		const resource = 'todos';
		const params = {};
		const fields = `{itemId item completed}`;

		getGraphQlData(resource, params, fields)
		.then(todos => {
			this.setState({
				todos: todos.data.todos,
			});
		})
		.catch(err => {
			console.error('err', err);
		});
	}

	createNewTodo (event) {
		event.preventDefault();
		const { value } = this.state;
		const resource = 'AddTodo';
		const params = {itemId: 1234, item: value, completed: false};
		const fields = `{itemId item completed}`;

		getGraphQlData(resource, params, fields, false)
		.then(newTodo => {
			const newTodos = this.state.todos.slice();
			newTodos.push(newTodo.data.AddTodo)
			this.setState({
				todos: newTodos,
				value: '',
			});
		})
		.catch(err => {
			console.error('err', err);
		});
	}

	handleChange(event) {
    this.setState({value: event.target.value});
  }

	render() {
		return (
			<div>
				<div className="section header">
					<div className="container">
						<h1 className="section-heading">GraphQL Workshop</h1>
						<p className="section-description">
							By: <a href="http://callmejoe.net/">Joe Karlsson</a>
						</p>
					</div>
				</div>

				<div className="section" id="content">
					<div className="six columns">
						<h4>REST</h4>
						<form action="/todo" method="POST">
							<input type="text" placeholder="item" name="item" />
							<button type="submit">Submit</button>
						</form>
					</div>

					<div className="six columns">
						<h4>GraphQL</h4>
						<form onSubmit={this.createNewTodo}>
							<input type="text" placeholder="item" name="item" value={this.state.value} onChange={this.handleChange} />
							<input type="hidden" value="false" name="completed" />
							<input type="hidden" value="3" name="id" />
							<button type="submit">Submit</button>
						</form>
					</div>
				</div>

				<div className="section todos">
					<h4>Todos:</h4>
					<List todos={this.state.todos} />
				</div>

				<div className="section footer">
					<h2>GraphQL Test</h2>
					<div>
						<a href="/graphql?query={todo(itemId:1){itemId,item}}">
							GraphQL Query Test
						</a>
					</div>
					<div>
						<a href="/graphql?query=query%20GetAllTodos%7Btodos%7BitemId%2Citem%7D%7D&operationName=GetAllTodos">
							GraphQL Mutation Test - Get All Todos
						</a>
					</div>
					<div>
						<a href="/graphql?query=mutation%20AddTodoItem{AddTodo(itemId:2,item:&quot;New_todo_item&quot;,completed:false){item, completed}}&operationName=AddTodoItem">
							GraphQL Mutation Test - Add Todo
						</a>
					</div>
					<div>
						<a href="/graphql?query=mutation%20DeleteTodoItem($itemId:%20Int!)%7BDeleteTodo(itemId%3A%24itemId)%7Bitem%7D%7D&operationName=DeleteTodoItem&variables={itemId:2}">
							GraphQL Mutation Test - Delete Todo by ID
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
