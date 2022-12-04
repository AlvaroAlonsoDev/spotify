import axios from "axios";
import { registerUser } from "../redux/features/user/userSlice";

export const fetchPostUsers = async (newUser, dispatch) => {
    console.log("hola")
        try {
            await axios.post("http://localhost:4000/user", newUser)
            await dispatch(registerUser(newUser))
    
        } catch (error) {
            console.log(error);
        }
    };