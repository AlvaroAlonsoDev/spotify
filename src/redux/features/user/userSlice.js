import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "users",
    initialState: {
        userLogged:null,
        list: [],
    },
    reducers: {
        setUserList: (state, action) => {
            state.list = action.payload;
        }
    },
});

export const { setUserList } = userSlice.actions;

export default userSlice.reducer;


