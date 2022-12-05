import { configureStore } from '@reduxjs/toolkit';
// reducer
import userSlice from './features/user/userSlice';
import trackSlice from './features/tracks/tracksSlice';

export default configureStore({
    reducer: {
        userSlice,
        trackSlice
    }
});
