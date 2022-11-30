import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import ModalLogin from '../Modals/ModalLogin/ModalLogin';
import BtnLogin from '../Buttons/BtnLogin/BtnLogin';


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

                    <BtnLogin
                        name={<RxHamburgerMenu />}
                        openModal={handleShow}
                        size='sm'
                    />
                    {/* <Button onClick={() => handleShow(true)}>
                        <RxHamburgerMenu />
                    </Button> */}
                    <Modal className='p-0' show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Modal body content</Modal.Body>
                    </Modal>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <ModalLogin />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}