import React from 'react'
import { Button } from 'react-bootstrap'
import './../StyleBtn.css'

const BtnLogin = ({ name, openModal, size }) => {
    return (
        <Button className='btn__login--home' size={size} onClick={() => openModal(true)}>
            {name}
        </Button>
    )
}

export default BtnLogin