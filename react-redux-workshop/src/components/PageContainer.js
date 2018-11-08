import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setItems } from '../actions';
import Page from './Page';

class PageContainer extends Component {
  constructor() {
    super();
    this.state = {
			error: false,
			loading: false,
    }
  };

	componentDidMount() {
		const { dispatch } = this.props;
		this.setState({ loading: true });


		this.loadDataFromReddit()
			.then(posts => {
				if(!posts) {
					this.setState({
						loading: false,
						error: true,
					});
					return dispatch(setItems(posts));
				}
				this.setState({loading: false});
				return dispatch(setItems(posts));
			})
			.catch(err => {
				this.onError(err);
			})
	};

	onError(err) {
		this.setState({
			loading: false,
			error: true,
		});
		console.error(err.toString());
	};

	loadDataFromReddit () {
		const url = 'https://www.reddit.com/r/Showerthoughts.json';
		return fetch(url)
			.then((response) => {
				return response.json();
			})
			.then(posts => {
				return posts.data.children;
			})
			.catch(err => {
				this.onError(err);
			})
	};

  render() {
		const {
			loading,
			error,
		} = this.state;
		const { posts } = this.props;

    return (
      <div>
        <Page
					posts={posts}
					loading={loading}
					error={error}
				/>
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.default,
  }
};

export default connect(
  mapStateToProps
)(PageContainer);
