import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Profile from '../components/profile/Profile';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Profile', () => {
  test('renders the profile component with joined missions', () => {
    useSelector.mockImplementation((selectorFn) => selectorFn({
      rocket: {
        rocket: [
          { id: 1, rocketName: 'Falcon 9', reserved: true },
          { id: 2, rocketName: 'Atlas V', reserved: false },
        ],
      },
      mission: {
        missions: [
          { mission_id: 1, mission_name: 'Mission 1', reserved: true },
          { mission_id: 2, mission_name: 'Mission 2', reserved: false },
        ],
      },
    }));

    render(<Profile />);

    const missionsTitle = screen.getByText('My Missions');
    expect(missionsTitle).toBeInTheDocument();

    const joinedMission = screen.getByText('Mission 1');
    expect(joinedMission).toBeInTheDocument();

    const noRocketBooked = screen.queryByText('No Rocket booked');
    expect(noRocketBooked).not.toBeInTheDocument();
  });

  test('renders the profile component without joined missions', () => {
    useSelector.mockImplementation((selectorFn) => selectorFn({
      rocket: {
        rocket: [
          { id: 1, rocketName: 'Falcon 9', reserved: false },
          { id: 2, rocketName: 'Atlas V', reserved: false },
        ],
      },
      mission: {
        missions: [
          { mission_id: 1, mission_name: 'Mission 1', reserved: false },
          { mission_id: 2, mission_name: 'Mission 2', reserved: false },
        ],
      },
    }));

    render(<Profile />);

    const missionsTitle = screen.getByText('My Missions');
    expect(missionsTitle).toBeInTheDocument();

    const noMissionJoined = screen.getByText('No Mission Joined');
    expect(noMissionJoined).toBeInTheDocument();

    const noRocketBooked = screen.getByText('No Rocket booked');
    expect(noRocketBooked).toBeInTheDocument();
  });
});
