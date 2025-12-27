import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, actions) => {
            state.value += actions.payload
        },
        resetNumber: (state) => {
            state.value = 0;
        }
    }
})

export const { increment, decrement, incrementByAmount, resetNumber } = counterSlice.actions
export default counterSlice.reducer