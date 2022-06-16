// API Details
const ROCKETS_ENPOINT = 'https://api.spacexdata.com/v3/rockets';

// Action Types
const FETCH_ROCKETS_BEGIN = 'FETCH_ROCKETS_BEGIN';
const FETCH_ROCKETS_SUCCESS = 'FETCH_ROCKETS_SUCCESS';
const ROCKETS_ERROR = 'ROCKETS_ERROR';
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const CANCEL_RESERVATIOIN = 'CANCEL_RESERVATIOIN';

// Initial State
const initialState = {
  rockets: [],
  loading: true,
  error: null,
};

// Action Creators
const fetchRocketsBegin = () => ({
  type: FETCH_ROCKETS_BEGIN,
});

const fetchRocketsSuccess = (rockets) => ({
  type: FETCH_ROCKETS_SUCCESS,
  payload: rockets,
});

const rocketsError = (error) => ({
  type: ROCKETS_ERROR,
  payload: error.message,
});

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  payload: id,
});

export const cancelReservation = (id) => ({
  type: CANCEL_RESERVATIOIN,
  payload: id,
});

// Side Effects
export const fetchRockets = () => async (dispatch) => {
  dispatch(fetchRocketsBegin());
  try {
    const response = await fetch(ROCKETS_ENPOINT);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    const rockets = json?.map((rocket) => ({
      id: rocket?.id,
      rocket_name: rocket?.rocket_name,
      description: rocket?.description,
      flickr_image: rocket?.flickr_images[0],
      reserved: false,
    }));
    dispatch(fetchRocketsSuccess(rockets));
    return json.rockets;
  } catch (error) {
    return dispatch(rocketsError(error));
  }
};

const reserveRocketAction = (rockets, id) => rockets.map((rocket) => {
  if (rocket.id !== id) return rocket;
  return { ...rocket, reserved: true };
});

const cancelRocketReservtionAction = (rockets, id) => rockets.map((rocket) => {
  if (rocket.id !== id) return rocket;
  return { ...rocket, reserved: false };
});

// Reducers
const rocketsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ROCKETS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ROCKETS_SUCCESS:
      return {
        ...state,
        rockets: action.payload,
        loading: false,
        error: null,
      };
    case RESERVE_ROCKET:
      return {
        ...state,
        rockets: reserveRocketAction(state.rockets, action.payload),
      };
    case CANCEL_RESERVATIOIN:
      return {
        ...state,
        rockets: cancelRocketReservtionAction(state.rockets, action.payload),
      };
    case ROCKETS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rocketsReducer;
