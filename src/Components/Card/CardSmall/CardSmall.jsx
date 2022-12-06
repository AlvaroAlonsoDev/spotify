import './Card.css';
import Player from '../../Player/Player';

const CardSmall = ({ track, size }) => {

    const prueba = (song) => {
        return <Player track={song} />
    }

    return (
        <div className={size} >
            <img className="card-img-top" src="https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/9d/3d/dd/9d3ddde2-d671-d9b4-3e21-e872b1529193/U0MtTVMtV1ctRmVlbGluZ19GZXN0aXZlLUFEQU1fSUQ9MTA1NzU5MDMzOC5wbmc.png/632x632cc.webp" alt="Card image cap" />
            <div className="card-text card-body">
                <h5 className="card-title">{track.name}</h5>
                <p className="card-text">{track.artist}</p>
                <button onClick={() => prueba(track.url)}>play</button>
            </div>
        </div>
    )
}

export default CardSmall

{/* <div className="profile-card-6"><img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-6.jpg" className="img img-responsive" alt="img" />
            <div className="profile-name"><BsHeart /> {e.name}
            </div>
            <div className="profile-position">{e.artist}</div>
            <div className="profile-overview">
                <div className="profile-overview">
                    <div className="row text-center">
                        <div className="col-sm">
                            <Button variant='link' onClick={() => console.log('holi')} className='text-decoration-none text-light'><FaRegPlayCircle /></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}