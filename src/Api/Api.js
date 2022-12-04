// axios
import axios from "axios";
import { setUserList, setUserLogged } from "../redux/features/user/userSlice";

export const fetchGetUsers = () => async (dispatch) => {
    try {
        const resp = await axios.get("http://localhost:4000/users");
        await dispatch(setUserList(resp.data));
    } catch (error) { console.log(error) }
};

export const functionLogin = (e, userData, dispatch, setShow) => {
    const new_user = {
        email: e.target.email.value,
        password: e.target.password.value
    }
    // auth new_user
    const interim_user = (userData.list).find(e => e.email === new_user.email)
    if (interim_user && interim_user.password === new_user.password) {
        console.log("Te has logueado correctamente pisha");
        dispatch(setUserLogged(new_user));
        setShow(false)
    } else { alert("Incorrect Password"); }
}