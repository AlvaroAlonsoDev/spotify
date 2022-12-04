// axios
import axios from "axios";

import { registerUser, setUserList } from "../redux/features/user/userSlice";

export const fetchGetUsers = () => async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:4000/user")
        await dispatch(setUserList(response.data))
    } catch (error) {
        console.log(error);
    }
};


//prueba mía

