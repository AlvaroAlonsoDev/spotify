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
        }
    },
});

export const { setUserList, setUserLogged, setIsLogged, setLogout } = userSlice.actions;

export default userSlice.reducer;

