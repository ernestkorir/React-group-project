import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { fetchMission, joinMission, leaveMission } from '../../redux/missions/missionsSlice';
import { fetchMission, joinMission, leaveMission } from '../redux/missions/missionsSlice';

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
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {allMissions.map((mission) => (
                        <tr className="single-mission" key={mission.mission_id}>
                            <td className="name">{mission.mission_name}</td>
                            <td>{mission.description}</td>
                            <td className='status'>
                                {mission.reserved ? (
                                    <span className='active-member'>Active Member</span>
                                ) : (
                                    <span className='non-active'>NOT A MEMBER</span>
                                )}
                            </td>
                            <td className='status'>
                                {mission.reserved ? (
                                    <button
                                    type='button'
                                    className='leave-btn'
                                    onClick={() => dispatch(leaveMission(mission.mission_id))}
                                    >Leave Mission</button>
                                ) : (
                                    <button
                                    type='button'
                                    className='join-btn'
                                    onClick={() => dispatch(joinMission(mission.mission_id))}
                                    >Join Mission</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  );
};
export default Missions;
