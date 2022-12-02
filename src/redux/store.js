import { configureStore } from '@reduxjs/toolkit';
// reducer
import userSlice from './features/user/userSlice';

export default configureStore({
    reducer: {
        userSlice
    }
});
