import { useSelector } from 'react-redux';
import './Profile.css'

const Profile = () => {
  const rocketList = useSelector((state) => state.rocket);
  const rocketFiltered = rocketList.rocket.filter((rocket) => rocket.reserved === true);
  return (
    <section className="profilePage">
      <div>
        <h2 className="title"> My Rockects</h2>
        <table>
          <ul className="display me">
            { rocketFiltered.length > 0 ? (
              rocketFiltered.map((rocket) => (
                <tr key={rocket.id}>
                  <td>
                    {rocket.rocketName}
                  </td>
                </tr>
              ))
            ) : (
              <li>
                <p className="title-three">No Rocket booked </p>
              </li>
            )}
          </ul>
        </table>
      </div>
    </section>
  );

}
export default Profile;