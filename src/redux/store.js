import { configureStore } from '@reduxjs/toolkit';
// reducer
import usersReducer from './features/user/userSlice';

export default configureStore({
    reducer: {
        usersData: usersReducer
    }
});
