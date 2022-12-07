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
            console.log(state.userLogged);
        },
        setIsLogged: (state, action) => {
            state.isLogged = action.payload;
        },
        setLogout: (state) => {
            state.isLogged = false
            state.userLogged = null
        },
        setUserRegister: (state, action) => {
            state.list = [...state.list, action.payload];
        },
        setUserLikedTrack: (state, action) => {
            state.userLogged = {
                ...state.userLogged,
                'liked_tracks': [...state.userLogged.liked_tracks, action.payload]
            }
        }
    },
});

export const { setUserList, setUserLogged, setIsLogged, setLogout, setUserRegister, setUserLikedTrack } = userSlice.actions;

export default userSlice.reducer;

