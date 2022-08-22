import { configureStore } from '@reduxjs/toolkit';
import currentTabReducer from './currentTab';

export default configureStore({
  reducer: {
    currentTab: currentTabReducer
  }
});
