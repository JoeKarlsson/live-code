import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './List';

class Page extends Component {
  constructor() {
    super();
		this.state = {
			posts: [],
			loading: false,
			error: false,
		}
  };

	renderError() {
		return <div>Sorry, there was an error. Please try again.</div>;
	}

	renderLoading() {
		return <div>Loading...</div>;
	}

	renderList() {
		return <List posts={this.props.posts} />;
	}

  render() {
		const { loading, error } = this.props;

		if (loading) {
			return this.renderLoading();
		}

		if (error) {
			return this.renderError();
		}

		return this.renderList();
  }
};

Page.propTypes = {
	posts: PropTypes.array
}

Page.defaultProps = {
	posts: [],
};

export default Page;
