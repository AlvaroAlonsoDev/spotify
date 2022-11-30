import { useState } from "react";
import { Modal } from "react-bootstrap";
import BtnLogin from "../../Buttons/BtnLogin/BtnLogin"


const ModalLogin = () => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    function handleShow(v) {
        setFullscreen(v);
        setShow(true);
    }
    return (
        <>
            <BtnLogin
                name='login'
                openModal={handleShow}

            />
            <Modal className='p-0' show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Pepe</Modal.Title>
                </Modal.Header>
                <Modal.Body>Modal body content</Modal.Body>
            </Modal>
        </>
    )
}

export default ModalLogin