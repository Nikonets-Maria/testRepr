import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: [
        {id: 1, title: 'Велосипед', count: 5},
       {id: 2, title: 'Самокат', count: 4},
       {id: 3, title: 'Гантели', count: 7},
       {id: 4, title: 'Ракетки', count: 1}
    ],
}

const cartSlice = createSlice({
    name:'products',
    initialState,
    reducers: {
        addProduct(state, action){
            state.card.push({
                id: Date.now(),
                title: action.payload,
                count: 1
              }) 
        },
        changeCount(state, action){
            return {...state, count: state.count + action.payload}
        },
        deleteIfZero(state, action){
        }
    }
})

export default cartSlice.reducer
export const {
    addProduct,
    changeCount,
    deleteIfZero
} = cartSlice.actions



