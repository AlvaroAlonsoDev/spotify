// axios
import axios from "axios";
import { userSlice } from "../redux/features/userData/userSlice";

export const getDataUser = () => (dispatch) => {
    axios
        .get("http://localhost:4000/user")
        .then((response) => {
            dispatch(setUserList(response.data));
        })
        .catch((error) => console.log(error));
};