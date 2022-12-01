import React from 'react'
import { getDataUser } from '../../../api/Api'
import { ApiContext } from './ApiContext';

const ApiProvider = ({ children }) => {

    const fetchGetUser = async () => {
        const data = await getDataUser();
        console.log(data);
    }

    return (
        <ApiContext.Provider value={{ fetchGetUser }}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider