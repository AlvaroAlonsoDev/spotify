import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from 'react-redux';
import { FaUserCircle } from "react-icons/fa";
import DropdownButton from 'react-bootstrap/DropdownButton';

export function AvatarUser() {
    const usersData = useSelector(state => state.userSlice)

    return (
        <>
            <DropdownButton
                className='my-dropdown-toggle '
                drop=''
                variant=""
                title=<FaUserCircle className='icon' />
            >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
        </>

    );
}
