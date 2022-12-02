import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "usersData",
    initialState: {
        isLogged: false,
        userLogged: null,
        list: [],
    },
    reducers: {
        setUserList: (state, action) => {
            state.list = action.payload;
        },
        setUserLogged: (state, action) => {
            state.userLogged = action.payload;
        },
        setIsLogged: (state, action) => {
            state.isLogged = action.payload;
        }
    },
});

export const { setUserList, setUserLogged, setIsLogged } = userSlice.actions;

export default userSlice.reducer;

