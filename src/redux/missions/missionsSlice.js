import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions'

const initialState = {
    missions: []
}

export const fetchMission = createAsyncThunk('missions/fetchMission', async() => {
        const res = await axios(url)
        const result = res.data
        const array = result.map((mission) => ({
            mission_id: mission.mission_id,
            mission_name: mission.mission_name,
            description: mission.description,
        }))

        return array
})

const missionList = createSlice({
    name: 'missions',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchMission.fulfilled, (state, action) => {
            state.missions  = action.payload
          });
    }
})

export default missionList.reducer