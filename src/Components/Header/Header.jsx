import Navbar from 'react-bootstrap/Navbar';
import ModalLogin from '../Modals/ModalLogin/ModalLogin';
import ModalAside from '../Modals/ModalAside/ModalAside';
import { useSelector } from 'react-redux';
import { AvatarUser } from '../AvatarUser/AvatarUser';
import { SiYoutubemusic } from "react-icons/si";

export function Header() {
    const usersData = useSelector( state => state.userSlice)
    
    return (
        <Navbar className='shadow-sm bg-body rounded'>
            <Navbar.Brand className='ms-2'>
                <ModalAside />
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end me-2">
                <SiYoutubemusic />&nbsp;YouMusic
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end me-2">
                { usersData.isLogged ? <AvatarUser /> : <ModalLogin /> } 
            </Navbar.Collapse>
        </Navbar>
    );
}