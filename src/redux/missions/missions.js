// Reducers
import { fetchMissions } from './missions-api';

const DISCAR_MISSION = 'DISCAR_MISSION';
const CONNECT_MISSION = 'CONNECT_MISSION';
const FETCH_MISSIONS = 'FETCH_MISSIONS';


const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload.map((mission) => ({
        ...mission,
        join: false,
      }));
    case CONNECT_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload.id) {
          return { ...mission, join: true };
        }
        return mission;
      });
    case DISCAR_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload.id) {
          return { ...mission, join: false };
        }
        return mission;
      });
    default:
      return state;
  }
}

export const fetchMissions = () => async (dispatch) => {
  const missions = await fetchMissions();
  dispatch({ type: FETCH_MISSIONS, payload: missions });
};

export const discardMission = (id) => ({
    type: DISCAR_MISSION,
    payload: { id },
  });
  

export const connectMission = (id) => ({
  type: CONNECT_MISSION,
  payload: { id },
});

