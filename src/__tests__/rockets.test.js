import rocketsReducer from '../redux/rockets/rockets';

const initialState = {
  rockets: [],
  loading: false,
  error: null,
};

it('Returns the initial state', () => {
  expect(rocketsReducer(initialState, {})).toEqual({
    rockets: [],
    loading: false,
    error: null,
  });
});

it('Handles fetch rockets', () => {
  expect(
    rocketsReducer(initialState, {
      type: 'FETCH_ROCKETS_SUCCESS',
      payload: [
        {
          id: 1,
          rocket_name: 'Falcon 9',
          description: 'Super Fast rockets',
          flickr_image: 'image',
          reserved: false,
        },
      ],
    }),
  ).toEqual({
    rockets: [
      {
        id: 1,
        rocket_name: 'Falcon 9',
        description: 'Super Fast rockets',
        flickr_image: 'image',
        reserved: false,
      },
    ],
    loading: false,
    error: null,
  });
});

it('Can reserve rockets ', () => {
  expect(
    rocketsReducer(
      {
        rockets: [{
          id: 1,
          rocket_name: 'Falcon 9',
          description: 'Super Fast rockets',
          flickr_image: 'image',
          reserved: false,
        }],
        loading: false,
        error: null,
      },
      {
        type: 'RESERVE_ROCKET',
        payload: 1,
      },
    ),
  ).toEqual({
    rockets: [{
      id: 1,
      rocket_name: 'Falcon 9',
      description: 'Super Fast rockets',
      flickr_image: 'image',
      reserved: true,
    }],
    loading: false,
    error: null,
  });
});

it('Can cancel reservations', () => {
  expect(
    rocketsReducer(
      {
        rockets: [{
          id: 1,
          rocket_name: 'Falcon 9',
          description: 'Super Fast rockets',
          flickr_image: 'image',
          reserved: true,
        }],
        loading: false,
        error: null,
      },
      {
        type: 'CANCEL_RESERVATIOIN',
        payload: 1,
      },
    ),
  ).toEqual({
    rockets: [{
      id: 1,
      rocket_name: 'Falcon 9',
      description: 'Super Fast rockets',
      flickr_image: 'image',
      reserved: false,
    }],
    loading: false,
    error: null,
  });
});
