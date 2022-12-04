import { useEffect } from "react";

// redux
import { fetchGetUsers } from "../../api/Api";
import { useDispatch } from 'react-redux';


export const Helper = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetUsers());
    }, [dispatch])

}