import reducer from './missions';

it('return the initial state', () => {
  expect(reducer(undefined, {})).toEqual([]);
});
it('handle FETCH_MISSIONS', () => {
  expect(
    reducer([], {
      type: 'FETCH_MISSIONS',
      payload: [
        {
          mission_id: 1,
          name: 'mission-test',
          join: false,
        },
      ],
    }),
  ).toEqual([
    {
      mission_id: 1,
      name: 'mission-test',
      join: false,
    },
  ]);
});
it('handle CONNECT_MISSION', () => {
  expect(
    reducer(
      [
        {
          mission_id: 1,
          name: 'missiontest',
          join: false,
        },
      ],
      {
        type: 'CONNECT_MISSION',
        payload: {
          id: 1,
        },
      },
    ),
  ).toEqual([
    {
      mission_id: 1,
      name: 'missiontest',
      join: true,
    },
  ]);
});
it('handle DISCARD_MISSION', () => {
  expect(
    reducer(
      [
        {
          mission_id: 1,
          name: 'missiontest',
          join: true,
        },
      ],
      {
        type: 'DISCARD_MISSION',
        payload: {
          id: 1,
        },
      },
    ),
  ).toEqual([
    {
      mission_id: 1,
      name: 'missiontest',
      join: false,
    },
  ]);
});
