import Dropdown from 'react-bootstrap/Dropdown';
// import { useSelector } from 'react-redux';
import { FaUserCircle } from "react-icons/fa";
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useDispatch } from 'react-redux';
import { setUserLogOut } from '../../redux/features/user/userSlice';

export function AvatarUser() {
    // const usersData = useSelector(state => state.userSlice)
    const dispatch = useDispatch();
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
                <Dropdown.Item eventKey="4" onClick={() => dispatch(setUserLogOut())}>Sing out</Dropdown.Item>
            </DropdownButton>
        </>

    );
}
