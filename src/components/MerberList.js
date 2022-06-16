import { useSelector } from 'react-redux';

const MemberList = () => {
  const missions = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets);

  const activeMissions = missions.filter((mission) => mission.join);
  const activeRockets = rockets?.rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="member-container">
      <div className="missions-container">
        <h2>My Missions</h2>
        <ul className="member-list">
          {activeMissions.length > 0 ? activeMissions.map((mission) => (
            <li key={mission.mission_id}>
              <p>{mission.mission_name}</p>
            </li>
          )) : (
            <li>
              <p>No active missions</p>
            </li>
          )}
        </ul>
      </div>
      <div className="rockets-container">
        <h2>My Rockets</h2>
        <ul className="member-list">
          {activeRockets.length > 0 ? activeRockets.map((rocket) => (
            <li key={rocket.id}>
              <p>{rocket.rocket_name}</p>
            </li>
          )) : (
            <li>
              <p>No rockets reserved</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MemberList;
