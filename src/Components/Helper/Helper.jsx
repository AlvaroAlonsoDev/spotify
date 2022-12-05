import { useEffect } from "react";

// redux
import { fetchGetAlbums, fetchGetTracks, fetchGetUsers } from "../../Api/Api";
import { useDispatch } from 'react-redux';


export const Helper = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchGetUsers(dispatch);
        fetchGetTracks(dispatch);
        fetchGetAlbums(dispatch)
    }, [dispatch])
}
