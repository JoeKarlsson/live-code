const {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLSchema,
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLBoolean,
} = require('graphql/type');

const ToDoMongo = require('../database/Todo');

const todoType = new GraphQLObjectType({
	name: 'todo',
	description: 'todo item',
	fields: () => ({
		itemId: {
			type: GraphQLInt,
			description: 'The id of the todo.',
		},
		item: {
			type: GraphQLString,
			description: 'The name of the todo.',
		},
		completed: {
			type: GraphQLBoolean,
			description: 'Completed todo?',
		},
	}),
});

const TodoMutationType = new GraphQLObjectType({
	name: 'todoMutation',
	description: 'These are the things we can change on a todo item.',
	fields: () => ({
		DeleteTodo: {
			type: todoType,
			description:
				'Delete a todo with id and return the todo that was deleted.',
			args: {
				itemId: { type: new GraphQLNonNull(GraphQLInt) },
			},
			resolve: (value, { itemId }) => {
				const deletedItem = new Promise((resolve, reject) => {
					ToDoMongo.deleteOne({ itemId }, (err, todo) => {
						err ? reject(err) : resolve(todo);
					});
				});

				return deletedItem;
			},
		},
		AddTodo: {
			type: todoType,
			description: 'Create a todo and return the new todo.',
			args: {
				itemId: {
					type: new GraphQLNonNull(GraphQLInt),
					description: 'The id of the todo.',
				},
				item: {
					type: new GraphQLNonNull(GraphQLString),
					description: 'The name of the todo.',
				},
				completed: {
					type: GraphQLBoolean,
					description: 'Has the todo been completed?',
				},
			},
			resolve: (value, { itemId, item, completed }) => {
				const newTodo = new Promise((resolve, reject) => {
					ToDoMongo.create({ itemId, item, completed }, (err, todo) => {
						err ? reject(err) : resolve(todo);
					});
				});
				return newTodo;
			},
		},
	}),
});

const TodoQueryType = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		todo: {
			type: new GraphQLList(todoType),
			description: 'Get a todo item by ID',
			args: {
				itemId: {
					name: 'itemId',
					type: new GraphQLNonNull(GraphQLInt),
				},
			},
			resolve: (root, { itemId }, source, fieldASTs) => {
				const foundItems = new Promise((resolve, reject) => {
					ToDoMongo.find({ itemId }, (err, todos) => {
						err ? reject(err) : resolve(todos);
					});
				});
				return foundItems;
			},
		},
		todos: {
			type: new GraphQLList(todoType),
			description: 'All todo items',
			args: {},
			resolve: () => {
				const foundItems = new Promise((resolve, reject) => {
					ToDoMongo.find((err, todos) => {
						err ? reject(err) : resolve(todos);
					});
				});
				return foundItems;
			},
		},
	},
});

const schema = new GraphQLSchema({
	query: TodoQueryType,
	mutation: TodoMutationType,
});

module.exports = schema;
