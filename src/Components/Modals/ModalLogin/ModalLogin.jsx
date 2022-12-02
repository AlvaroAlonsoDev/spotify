import { useState } from "react";
import { Modal } from "react-bootstrap";
import { MainBtn } from "../../Buttons/MainBtn/MainBtn";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from "react-redux";


const ModalLogin = () => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const usersData = useSelector(state => state.userSlice.list);

    function handleShow(v) {
        setFullscreen(v);
        setShow(true);
    }

    const login = (e) => {
        // 1 RECGEOR LA INFO DEL FORM 
        // 2 VALIDAR INFO
        // 3 DISPATCH
        e.preventDefault();
        const loginUser = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        const checkUser = usersData.find((user) => user.password === loginUser.password)
        const checkPassword = usersData.find((user) => user.email === loginUser.email)
        
        if (findUser) {
            console.log(findUser);            
        } else {
            console.log('Credenciales no validas');
        }
        // const findUser = 
    }

    return (
        <>
            <MainBtn
                name='login'
                openModal={handleShow}
            />
            <Modal className='p-0' show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={ (e) => login(e) }>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
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

export default ModalLogin