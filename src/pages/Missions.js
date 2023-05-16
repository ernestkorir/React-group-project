import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMission } from '../redux/missions/missionsSlice';
import './Missions.css';

const Missions = () => {
  const allMissions = useSelector((state) => state.mission.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMission());
  }, [dispatch]);

  return (
        <div>
            <table className="main-table">
                <thead className="table-head">
                    <tr>
                        <th>Mission</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {allMissions.map((mission) => (
                        <tr className="single-mission" key={mission.mission_id}>
                            <td className="name">{mission.mission_name}</td>
                            <td>{mission.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  );
};
export default Missions;
