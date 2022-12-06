import { useEffect } from "react";

// redux
import { fetchGetAlbums, fetchGetTracks, fetchGetUsers } from "../../Api/Api";
import { useDispatch } from 'react-redux';


export const Helper = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetUsers());
        fetchGetTracks(dispatch);
        fetchGetAlbums(dispatch)
    }, [dispatch])

}