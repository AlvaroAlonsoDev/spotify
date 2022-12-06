import { useEffect } from "react";

// redux
import { fetchGetTracks, fetchGetUsers } from "../../Api/Api";
import { useDispatch } from 'react-redux';


export const Helper = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetUsers());
        fetchGetTracks(dispatch);
    }, [dispatch])

}