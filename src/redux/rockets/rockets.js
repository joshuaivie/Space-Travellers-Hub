// API Details
const ROCKETS_ENPOINT = 'https://api.spacexdata.com/v3/rockets';

// Action Types
const FETCH_ROCKETS_BEGIN = '/rockets/FETCH_ROCKETS_BEGIN';
const FETCH_ROCKETS_SUCCESS = '/rockets/FETCH_ROCKETS_SUCCESS';
const ROCKETS_ERROR = '/rockets/ROCKETS_ERROR';
// const RESERVE_ROCKET = '/rockets/RESERVE_ROCKET';
// const CANCEL_RESERVATIOIN = '/rockets/CANCEL_RESERVATIOIN';

// Initial State
const initialState = {
  rockets: [],
  loading: true,
  error: null,
};

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
        books: action.payload,
        loading: false,
        error: null,
      };
    case ROCKETS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

// Action Creators
const fetchRocketsBegin = () => ({
  type: FETCH_ROCKETS_BEGIN,
});

const fetchRocketsSuccess = (rockets) => ({
  type: FETCH_ROCKETS_SUCCESS,
  payload: rockets,
});

const rocketsError = (errorMessage) => ({
  type: ROCKETS_ERROR,
  payload: errorMessage,
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
    const rockets = json?.data.map((rocket) => ({
      id: rocket?.id,
      rocket_name: rocket?.rocket_name,
      description: rocket?.description,
      flickr_image: rocket?.flickr_images[0],
      reserved: false,
    }));
    dispatch(fetchRocketsSuccess(rockets));
    return json.books;
  } catch (error) {
    return dispatch(rocketsError(error));
  }
};

export default rocketsReducer;
