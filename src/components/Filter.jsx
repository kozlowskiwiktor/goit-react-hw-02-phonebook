import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    const { filterUsers } = this.props;

    return (
      <form>
        <label>Find contact</label>
        <input onChange={filterUsers}></input>
      </form>
    );
  }
}

Filter.propTypes = {
  filterUsers: PropTypes.func,
};
