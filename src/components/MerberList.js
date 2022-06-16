import { useSelector } from 'react-redux';

const MemberList = () => {
  const missions = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets);

  const activeMissions = missions.filter((mission) => mission.join);
  const activeRockets = rockets?.filter((rocket) => rocket.reserve) || [];

  return (
    <div className="member">
      <div className="missions-container">
        <h1>My Missions</h1>
        <ul>
          {activeMissions.map((mission) => (
            <li key={mission.mission_id}>
              <h2>{mission.mission_name}</h2>
            </li>
          ))}
        </ul>
      </div>
      <div className="rockets-container">
        <h1>My Rockets</h1>
        <ul>
          {activeRockets.map((rocket) => (
            <li key={rocket.id}>
              <h2>{rocket.rocket_name}</h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MemberList;
