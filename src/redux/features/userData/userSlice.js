import { createSlice } from "@reduxjs/toolkit"
import { getDataUser } from "../../../Api/Api";


export const userSlice = createSlice({

    name: "dataUser",
    initialState:[],
    reducer: {

        setUser:(state, action) => {
            state.listUsers = action.payload 
        }
    }
});
export const {setUser} = userSlice.actions; 

export default userSlice.reducer;


export const fetchUser = async (dispatch)=>{
    const data = await getDataUser();
    dispatch(setUser(data))
}