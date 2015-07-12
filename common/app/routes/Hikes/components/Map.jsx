import React from 'react';
import stampit from 'react-stampit';
import { Link } from 'react-router';
import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap';
import videos from '../videos.json';

export default stampit(React, {
  displayName: 'HikesMap',

  render() {

    const vidElements = videos.map(({ title, id }) => {
      return (
        <ListGroupItem key={ id }>
          <Link to={ `/hikes/${id}` }>
            <h3>{ title }</h3>
          </Link>
        </ListGroupItem>
      );
    });

    return (
      <div>
        <Panel>
          <h2>Welcome To Hikes!</h2>
        </Panel>
        <ListGroup>
          { vidElements }
        </ListGroup>
      </div>
    );
  }
});