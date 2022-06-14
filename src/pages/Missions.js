import React from 'react';

function Missions() {
  <div className="missions-container">
  <table>
    <thead>
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
        <th> </th>
      </tr>
    </thead>
    <tbody>
      {missions.map((mission) => (
        <Mission
          key={mission.mission_id}
          id={mission.mission_id}
          name={mission.mission_name}
          description={mission.description}
          join={mission.join}
        />
      ))}
    </tbody>
  </table>
</div>
);
}

export default Missions;
