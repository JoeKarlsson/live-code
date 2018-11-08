const path = require('path');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ToDo = require('./database/Todo');
const schema = require('./graphql/schema');

const connectToMongo = () => {
	mongoose.connect('mongodb://database:27017/local');
	const db = mongoose.connection;
	db.on('error', () => {
		console.log('---FAILED to connect to mongoose');
	});
	db.once('open', () => {
		console.log('+++Connected to mongoose');
	});
};

module.exports = app => {
	connectToMongo();
	app.use(bodyParser.json())
	app.use('/', express.static(path.resolve(__dirname, 'dist')));

	app.use(
		'/graphql',
		graphqlHTTP(request => {
			return {
				schema: schema,
				graphiql: true,
				pretty: true,
				formatError: error => ({
					message: error.message,
					locations: error.locations,
					stack: error.stack ? error.stack.split('\n') : [],
					path: error.path,
				}),
			};
		}),
	);

	app.post('/todos', (req, res) => {
		// Insert into TodoList Collection
		const todoItem = new ToDo({
			itemId: 1,
			item: req.body.item,
			completed: false,
		});

		todoItem.save((err, result) => {
			if (err) {
				console.log('---TodoItem save failed ' + err);
			}
			console.log('+++TodoItem saved successfully ' + todoItem.item);

			res.redirect('/');
		});
	});

	app.listen(3000);
};
