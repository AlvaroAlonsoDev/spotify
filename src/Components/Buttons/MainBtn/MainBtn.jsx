import React from 'react'
import { Button } from 'react-bootstrap'
import './../StyleBtn.css'

export const MainBtn = ({ name, openModal, size }) => {
    return (
        <Button className='btn__login--home' size={size} onClick={() => openModal(true)}>
            {name}
        </Button>
    )
}

