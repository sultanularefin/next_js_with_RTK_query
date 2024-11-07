

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "@/lib/store";
/*import {
    working_Process_Slider_Data_Interface
} from "@/app/ui/career/ourWorkProcess/data/working_Process_Slider_Data_Interface";
import workingProcessSliderData from "@/app/ui/career/ourWorkProcess/data/workingProcessSliderData";*/

interface workProcessState {
    // value: number
    processes: [],
    selected_Process_Index: number,
}


const initialState: workProcessState = {
    // value: 0,
    processes: [],
    selected_Process_Index: 0,
}



const update_work_process_index_2 = (state: any,
                                                            action: PayloadAction<number>) => {
    state.selected_Process_Index = action.payload;


}


export const workProcessSlice = createSlice({
    name: 'workProcess',

    initialState,
    reducers: {
        update_work_process_index: update_work_process_index_2,
    },
})

export const {
    update_work_process_index,

} = workProcessSlice.actions


// export const selectCount = (state: RootState) => state.workProcess.value
export const export_all_processes = (state: RootState) => state.workProcess.processes
export const selected_process_Index_RTK = (state: RootState) => state.workProcess.selected_Process_Index




export default workProcessSlice.reducer
