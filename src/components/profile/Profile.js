import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const rocketList = useSelector((state) => state.rocket);
  const rocketFiltered = rocketList.rocket.filter((rocket) => rocket.reserved === true);
  const allMissions = useSelector((state) => state.mission.missions);
  const joinedMissions = allMissions.filter((mission) => mission.reserved === true);

  return (
    <section className="profilePage">
        <div className='mission-reserve'>
          <h2>My Missions</h2>
          <table className='tmission'>
            <tbody>
              { joinedMissions.length > 0 ? (
                joinedMissions.map((joined) => (
                <tr key={joined.mission_id}>
                  <td>{joined.mission_name}</td>
                </tr>
                ))
              ) : (
                <p>No Mission Joined</p>
              )}
            </tbody>
          </table>
      </div>
      <div className='rocket-reserve'>
        <h2> My Rockects</h2>
        <table className='trocket'>
          <tbody className="display me">
            { rocketFiltered.length > 0 ? (
              rocketFiltered.map((rocket) => (
                <tr key={rocket.id}>
                  <td>
                    {rocket.rocketName}
                  </td>
                </tr>
              ))
            ) : (
                <p className="title-three">No Rocket booked </p>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default Profile;
