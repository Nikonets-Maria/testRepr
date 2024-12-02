import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'


const rootReducer = combineReducers({
    // users: userReducer,
    users: userSlice
})

export const store = configureStore({
    reducer: rootReducer
})




