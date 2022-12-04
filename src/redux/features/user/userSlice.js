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
        },
        setLogout: (state) => {
            state.isLogged = false
            state.userLogged = null
        },
        registerUser: (state, action) => {
            state.list = [...state.list, action.payload]

        }

    },
});

export const { setUserList, setUserLogged, setIsLogged, setLogout, registerUser } = userSlice.actions;

export default userSlice.reducer;

