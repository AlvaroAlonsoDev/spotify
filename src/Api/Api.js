// axios
import axios from "axios";
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