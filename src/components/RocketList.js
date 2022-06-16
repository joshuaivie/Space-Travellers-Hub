import React from 'react';
import PropTypes from 'prop-types';
import RocketItem from './RocketItem';

function RocketList({ rockets }) {
  return (
    <ul className="rocket-list">
      {rockets.map((rocket) => (
        <RocketItem key={rocket.id} rocket={rocket} />
      ))}
    </ul>
  );
}

export default RocketList;

RocketList.propTypes = {
  rockets: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_image: PropTypes.string,
    reserved: PropTypes.bool,
  })).isRequired,
};
