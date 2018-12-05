import React from 'react';
import PropTypes from 'prop-types';

import './user.css';

export class User extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <div className="user">
        <p>Hello, {name}</p>
      </div>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};
