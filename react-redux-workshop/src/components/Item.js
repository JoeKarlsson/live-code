import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
  render() {
    return (
      <div className='redditItem'>
        <h3>{ this.props.children }</h3>
        <p>Author: {this.props.author}</p>
      </div>
    )
  }
};

Item.propTypes = {
	children: PropTypes.string,
	author: PropTypes.string,
};

Item.defaultProps = {
	children: '',
	author: '',
};

export default Item;
