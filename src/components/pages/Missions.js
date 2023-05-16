import { useEffect } from "react";
import { fetchMission } from "../../redux/missions/missionsSlice";
import { useSelector, useDispatch } from 'react-redux';
import './Missions.css';

const Missions = () => {
    const allMissions = useSelector((state) => state.mission.missions)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMission())
    }, [])

    return(
        <div>
            <table className="main-table">
                <thead className="table-head">
                    <tr>
                        <th>Mission</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {allMissions.map((mission) => (
                        <tr>
                            <td>{mission.mission_name}</td>
                            <td>{mission.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};
export default Missions;
