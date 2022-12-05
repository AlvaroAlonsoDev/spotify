// axios
import axios from "axios";
import { setUserList } from "../redux/features/user/userSlice";

export const fetchGetUsers = () => (dispatch) => {
    axios
        .get("http://localhost:4000/user")
        .then((response) => { dispatch(setUserList(response.data)) })
        .catch((error) => console.log(error));
};