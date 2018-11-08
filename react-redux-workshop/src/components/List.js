import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

class List extends Component {
  render() {
    const itemNode = this.props.posts.map((item) => {
      return (
        <Item author={item.data.author} key={item.data.id} >
          {item.data.title}
        </Item>
      )
    })
    return (
      <div className='redditList'>
        { itemNode }
      </div>
    )
  }
};

List.propTypes = {
	posts: PropTypes.array
};

List.defaultProps = {
	posts: [],
};

export default List;
