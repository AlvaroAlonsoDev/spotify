import Navbar from 'react-bootstrap/Navbar';
import ModalLogin from '../Modals/ModalLogin/ModalLogin';
import ModalAside from '../Modals/ModalAside/ModalAside';


export function Header() {
    
    return (
        <Navbar className='bg-light mx-4'>
                <Navbar.Brand >
                    <ModalAside />
                </Navbar.Brand>
                <Navbar.Toggle />

                <Navbar.Collapse className="justify-content-end">
                    <ModalLogin />
                </Navbar.Collapse>
        </Navbar>
    );
}