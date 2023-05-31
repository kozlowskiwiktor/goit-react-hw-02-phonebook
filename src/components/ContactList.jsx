import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';

export class ContactList extends Component {
  render() {
    const { state } = this.props;

    return (
      <>
        {state.contacts
          .filter(contact => contact.name.includes(state.filter.toUpperCase()))
          .map(contact => (
            <p key={nanoid()}>
              {contact.name}
              {''}
              {contact.number}
              <button
                onClick={() => {
                  let index = state.contacts.indexOf(contact);
                  this.setState(state.contacts.splice(index, 1));
                }}
                value={contact.name}
              >
                delete
              </button>
            </p>
          ))}
      </>
    );
  }
}
ContactList.propTypes = {
  state: propTypes.object.isRequired,
};
