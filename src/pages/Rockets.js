import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';
import RocketList from '../components/RocketList';

function Rockets() {
  const rocketsState = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  const { rockets, loading, error } = rocketsState;

  useEffect(() => {
    console.log(rocketsState);
  }, [rocketsState]);
  return (
    <>
      {!loading
        && (error ? (<div>{error}</div>)
          : (
            <RocketList rockets={rockets} />
          ))}
    </>
  );
}

export default Rockets;
