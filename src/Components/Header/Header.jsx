import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import ModalLogin from '../Modals/ModalLogin/ModalLogin';
import BtnLogin from '../Buttons/MainBtn/MainBtn';
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