import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "@/lib/store";
import {incrementAsync} from "@/lib/features/counter/thunks/counter_thunks";

interface CounterState {
    value: number
}

// Define the initial state using that type
const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },

        initializeCount: (state, action) => {
            state.value = action.payload;
            // state.previous_favs_ids = [];
            // state.previsou_favs_list_img_name_price = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, () => {
                console.log("incrementAsync.pending");
            })
            .addCase(
                incrementAsync.fulfilled,
                (state, action: PayloadAction<number>) => {
                    console.log("incrementAsync.fulfilled", action.payload);
                    state.value += action.payload;
                }
            );
    },
})

export const {
    increment,
    decrement,
    incrementByAmount,
    initializeCount,
} = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer
