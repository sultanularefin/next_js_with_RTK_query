import {configureStore} from '@reduxjs/toolkit'

import {counterSlice} from "@/lib/features/counter/counterSlice";
import {workProcessSlice} from "@/lib/features/work_process/work_Process_Slice";
import {employee_Slice} from "@/lib/features/employee/employee_Slice";
import {postsApiSlice} from "@/lib/features/posts/postsApiSlice";

// import { postsApiSlice } from "./posts/postsApiSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {

            counter: counterSlice.reducer,
            workProcess: workProcessSlice.reducer,
            employee: employee_Slice.reducer,
            [postsApiSlice.reducerPath]: postsApiSlice.reducer,
            // driver: driverSlice,
            // operator: operatorSlice,
            // any_user: userSlice,
            // agent: agentSlice,
            // register: registerSlice,
            // passenger: passengerSlice,
            // register: registrationSlice,

        },
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(postsApiSlice.middleware);
        },
    });

}


// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
