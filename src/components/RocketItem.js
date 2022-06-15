import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelReservation, reserveRocket } from '../redux/rockets/rockets';

function RocketItem({ rocket }) {
  const dispatch = useDispatch();

  return (
    <li className="rocket-item">
      <div className="rocket-image-container">
        <div
          className="rocket-image"
          style={{ backgroundImage: `url('${rocket.flickr_image}')` }}
        />
      </div>
      <div className="rocket-details">
        <h2 className="rocket-name">{rocket.rocket_name}</h2>
        <p className="rocket-description">
          {rocket.reserved && (<span className="reserved-badge">Reserved</span>)}
          {' '}
          {rocket.description}
        </p>
        {rocket.reserved ? (
          <button
            type="button"
            className="button cancel-reservation"
            onClick={() => dispatch(cancelReservation(rocket.id))}
          >
            Cancel Reservation
          </button>
        ) : (
          <button
            type="button"
            className="button reserve-rocket"
            onClick={() => dispatch(reserveRocket(rocket.id))}
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </li>
  );
}

export default RocketItem;

RocketItem.propTypes = {
  rocket: PropTypes.exact({
    id: PropTypes.number,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_image: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};
