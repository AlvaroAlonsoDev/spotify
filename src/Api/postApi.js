import axios from "axios";
import { registerUser, setUserLogged } from "../redux/features/user/userSlice";
import { v4 as uuidv4 } from 'uuid';


export const fetchPostUser = async (newUser, dispatch) => {
    try {
        await axios.post('http://localhost:4000/users', newUser);
        await dispatch(registerUser(newUser));
    } catch (error) { console.log(error) }
}

export const functionRegister = async(e, dispatch) => {
    const new_user = {
        id: uuidv4(),
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value
    }
    await fetchPostUser(new_user, dispatch);
    await dispatch(setUserLogged(new_user));
}