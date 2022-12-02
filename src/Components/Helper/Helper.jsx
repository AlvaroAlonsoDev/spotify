import { useEffect } from "react";

// redux
import { fetchGetUsers } from "../../Api/Api";
import { useDispatch, useSelector } from 'react-redux';


export const Helper = () => {
    const users = useSelector(state => state.userSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetUsers());
    }, [dispatch])
}
