const paramsToString = (params) => {
	let paramString = '';
	if (params.constructor === Object && Object.keys(params).length) {
		let tmp = [];
		for (let key in params) {
			let paramStr = params[key];
			if (paramStr !== '') {
				if (typeof params[key] === 'string') {
					paramStr = `"${paramStr}"`;
				}
				tmp.push(`${key}:${paramStr}`);
			}
		}
		if (tmp.length) {
			paramString = `(${tmp.join()})`;
		}
	}
	return paramString;
}

const getGraphQlData = (resource, params, fields, isQuery = true ) => {
	let query;
	if (isQuery) {
		query = `query {${resource} ${paramsToString(params)} ${fields}}`;
	} else {
		query = `mutation {${resource} ${paramsToString(params)} ${fields}}`;
	}
	return fetch('/graphql', {
		method: 'POST',
		mode: 'cors',
		headers: new Headers({
			'Content-Type': 'application/json',
			Accept: 'application/json',
		}),
		body: JSON.stringify({ query }),
	})
	.then(response => response.json())
	.catch(err => {
		console.error('err', err);
	});
}

export default getGraphQlData;
