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
          <div className='tmission'>
            <ul>
              { joinedMissions.length > 0 ? (
                joinedMissions.map((joined) => (
                <li key={joined.mission_id}>
                  {joined.mission_name}
                </li>
                ))
              ) : (
                <p>No Mission Joined</p>
              )}
            </ul>
          </div>
      </div>
      <div className='rocket-reserve'>
        <h2> My Rockects</h2>
        <div className='trocket'>
          <ul className="display me">
            { rocketFiltered.length > 0 ? (
              rocketFiltered.map((rocket) => (
                <li key={rocket.id}>

                    {rocket.rocketName}

                </li>
              ))
            ) : (
                <p className="title-three">No Rocket booked </p>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Profile;
