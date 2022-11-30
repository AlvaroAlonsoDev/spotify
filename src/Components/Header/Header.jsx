import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import ModalLogin from '../Modals/ModalLogin/ModalLogin';
import BtnLogin from '../Buttons/MainBtn/MainBtn';
import ModalAside from '../Modals/ModalAside/ModalAside';


export function Header() {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    function handleShow(v) {
        setFullscreen(v);
        setShow(true);
    }
    return (
        <Navbar className='bg-light'>
            <Container>
                <Navbar.Brand >
                    <ModalAside />
                </Navbar.Brand>
                <Navbar.Toggle />

                <Navbar.Collapse className="justify-content-end">
                    <ModalLogin />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}