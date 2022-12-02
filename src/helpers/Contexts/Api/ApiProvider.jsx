import React from 'react'
import { getDataUser } from '../../../Api/Api'
import { ApiContext } from './ApiContext';

const ApiProvider = ({ children }) => {

    const fetchGetUser = async () => {
        const data = await getDataUser();
    }

    return (
        <ApiContext.Provider value={{ fetchGetUser }}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider