import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: number,
    inc: boolean,
    set: boolean,
    max: number,
    start: number
}

const initialState: CounterState = {
    value: 0,
    inc: false,
    set: true,
    max: 5,
    start: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        setSet: (state, action: PayloadAction<boolean>) => {
            state.set = action.payload
        },
        setInc: (state, action: PayloadAction<boolean>) => {
            state.inc = action.payload
        },
        setStart: (state, action: PayloadAction<number>) => {
            state.start = action.payload
        },
        setMax: (state, action: PayloadAction<number>) => {
            state.max = action.payload
        },
        setCount: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        },
    },
})

export const { increment, setSet, setInc, setStart, setMax, setCount} = counterSlice.actions

export default counterSlice.reducer