import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userData/userSlice";


export default configureStore({


    reducer: {
        userSlice
    }

})



