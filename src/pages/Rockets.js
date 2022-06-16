import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';
import RocketList from '../components/RocketList';

function Rockets() {
  const dispatch = useDispatch();
  const rocketsState = useSelector((state) => state.rockets);

  useEffect(() => {
    if (!rocketsState.rockets.length) {
      dispatch(fetchRockets());
    }
  }, [dispatch]);

  const { rockets } = rocketsState;

  /* useEffect(() => {
  }, [rocketsState]); */
  return (
    <>
      <RocketList rockets={rockets} />
    </>
  );
}

export default Rockets;
