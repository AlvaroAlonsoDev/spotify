// axios
import axios from "axios";
import { setAlbumsList } from "../redux/features/albums/albumsSlice";
import { setTracksList } from "../redux/features/tracks/tracksSlice";
import { setUserList } from "../redux/features/user/userSlice";

export const fetchGetUsers = async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:4000/user');
        await dispatch(setUserList(response.data))
    } catch (error) {
        console.log(error);
    };
}

export const fetchGetTracks = async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:4000/tracks');
        await dispatch(setTracksList(response.data))
    } catch (error) {
        console.log(error);
    }
}

export const fetchGetAlbums = async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:4000/albums');
        await dispatch(setAlbumsList(response.data))
    } catch (error) {
        console.log(error);
    }
}