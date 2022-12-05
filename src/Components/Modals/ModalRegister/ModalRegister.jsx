import { useState } from "react";
import { Modal } from "react-bootstrap";
import { MainBtn } from "../../Buttons/MainBtn/MainBtn";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { setUserRegister } from "../../../redux/features/user/userSlice";
import { v4 as uuidv4 } from 'uuid';
import { fetchRegisterUsers } from "../../../Api/ApiPost";


const ModalRegister = () => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    function handleShow(v) {
        setFullscreen(v);
        setShow(true);
    }

    const register = (e) => {
        e.preventDefault();
        const registerUser = {
            id: uuidv4(),
            email: e.target.email.value,
            password: e.target.password.value,
            address: e.target.address.value
        }

        if (registerUser) {
            fetchRegisterUsers(registerUser);
            dispatch(setUserRegister(registerUser));
            setShow(false);
        }
    }

    return (
        <>
            <MainBtn
                name='register'
                openModal={handleShow}
            />

            <Modal className='p-0' show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => register(e)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="address" placeholder="Address" name="address" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalRegister