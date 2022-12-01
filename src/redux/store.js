import { configureStore } from '@reduxjs/toolkit';
// reducer
import userSlice from './features/userData/userSlice';

export default configureStore({
    reducer: {
        userSlice
    }
});
