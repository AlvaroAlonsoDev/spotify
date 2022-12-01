import { useEffect } from "react";

// redux
import { fetchGetUsers } from "../../api/Api";
import { useDispatch, useSelector } from 'react-redux';


export const Helper = () => {
    const users = useSelector(state => state.userSlice);

    console.log(users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetUsers());
    }, [])
}
