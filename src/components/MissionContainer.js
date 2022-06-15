import { useDispatch } from 'react-redux';
import '../styles/missioncontainer.css';
import PropTypes from 'prop-types';
import { connectMission, discardMission } from '../redux/missions/missions';

const MissionContainer = (props) => {
  const {
    id,
    name,
    description,
    join,
  } = props;
  const dispatch = useDispatch();

  const onClickEventHandler = () => {
    if (join) {
      dispatch(discardMission(id));
    } else {
      dispatch(connectMission(id));
    }
  };

  return (
    <tr className="mission-container">
      <td className="name-field">{name}</td>
      <td className="description-field">{description}</td>
      <td className="status-field">
        <p className={join ? 'active' : ''}>
          {join ? 'Active Member' : 'NOT A MEMBER'}
        </p>
      </td>
      <td className="action-container">
        <button
          type="button"
          className={join ? 'btn active' : 'btn'}
          onClick={onClickEventHandler}
        >
          {join ? 'Leave Mission' : 'Join   Mission'}
        </button>
      </td>
    </tr>
  );
};

export default MissionContainer;

MissionContainer.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  join: PropTypes.bool.isRequired,
};
