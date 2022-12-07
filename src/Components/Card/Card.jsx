import { useDispatch, useSelector } from 'react-redux';
import { setTrack } from '../../redux/features/player/playerSlice';
import './Card.css';

const Card = ({ data, size, img }) => {
    const dispatch = useDispatch();
    const userData = useSelector( state => state.userSlice)

    const setPlayer = (url) => {
        userData.isLogged ? dispatch(setTrack(url)) : console.log('Tienes que logearte para escuchar la cancion');
    }
    return (

        <div className={size} >
            <img className={img} src={data.thumbnail} />
            <div className="card-text card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.artist}</p>
                <button onClick={() => setPlayer(data.url)}>Play</button>
            </div>
        </div>
        
    )
}

export default Card