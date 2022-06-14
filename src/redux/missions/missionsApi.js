const Endpoint = 'https://api.spacexdata.com/v3/missions';

export const getMissions = async () => {
  try {
    const res = await fetch(Endpoint);
    const missions = await res.json();
    if (res.ok) {
      return missions;
    }
  } catch (error) {
    return error;
  }
  return false;
};

export default getMissions;