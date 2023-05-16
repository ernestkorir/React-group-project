import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
};

export const fetchMission = createAsyncThunk('missions/fetchMission', async () => {
  const res = await axios(url);
  const result = res.data;
  const array = result.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));

  return array;
});

const missionList = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission(state, action) {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return {
            ...mission,
            reserved: true,
          };
        }
        return mission;
      });
      return { missions: [...newState] };
    },

    leaveMission(state, action) {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return {
            ...mission,
            reserved: false,
          };
        }
        return mission;
      });
      return { missions: [...newState] };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMission.fulfilled, (state, action) => ({
        ...state,
        missions: action.payload,
      }));
  },
});

export const { joinMission, leaveMission } = missionList.actions;

export default missionList.reducer;
