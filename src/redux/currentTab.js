import { createSlice } from '@reduxjs/toolkit';

export const currentTabSlice = createSlice({
  name: "currentTab",
  initialState: {
    currentTab: 'home'
  },
  reducers: {
    setHome: (state) => {
      state.currentTab = 'home';
    },
    setWork: (state) => {
      state.currentTab = 'work';
    },
    setContact: (state) => {
      state.currentTab = 'contact';
    },
    setAbout: (state) => {
      state.currentTab = 'about';
    }
  }
})

export const { setHome, setWork, setContact, setAbout } = currentTabSlice.actions;

export default currentTabSlice.reducer;