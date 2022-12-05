import { FaRegPlayCircle } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { BsHeart } from "react-icons/bs";

export const CardSmall = ({e}) => {
    return (
        <div className="profile-card-6"><img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-6.jpg" className="img img-responsive" alt="img" />
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
        </div>
    )
}
