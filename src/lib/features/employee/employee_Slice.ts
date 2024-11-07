

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "@/lib/store";
// import {
//     working_Process_Slider_Data_Interface
// } from "@/app/ui/career/ourWorkProcess/data/working_Process_Slider_Data_Interface";
// import workingProcessSliderData from "@/app/ui/career/ourWorkProcess/data/workingProcessSliderData";
// import employee_Data from "@/app/ui/comps/theTeam/data/employee_Data";
// import {One_Employee_interface} from "@/app/ui/comps/theTeam/data/employee_Interface";
// import {employee_Data, One_Employee_interface} from "@/app/ui/comps/theTeam/data/employee_Data";

interface employeeState {
    // value: number
    all_employee_data: [],
    selected_employee_Index: number,
    index_of_employee_for_portfolio: number,
}


const initialState: employeeState = {

    all_employee_data:[],
    selected_employee_Index: 0,
    index_of_employee_for_portfolio: -1,
}


const update_employee_index_for_portfolio_page_2 =(state: any,
                                                   action: PayloadAction<number>)=>{
    state.index_of_employee_for_portfolio = action.payload;

}

const update_employee__index_2 = (state: any,
                                                            action: PayloadAction<number>) => {
    state.selected_employee_Index = action.payload;


}


export const employee_Slice = createSlice({
    name: 'workProcess',

    initialState,
    reducers: {
        update_employee__index_1: update_employee__index_2,
        update_employee_index_for_portfolio_page: update_employee_index_for_portfolio_page_2,
    },
})

export const {
    update_employee__index_1,
    update_employee_index_for_portfolio_page,

} = employee_Slice.actions


export const export_all_employee_data = (state: RootState) => state.employee.all_employee_data;
export const selected_employee_Index_RTK = (state: RootState) => state.employee.selected_employee_Index
export const index_of_employee_for_portfolio_RTK = (state: RootState) => state.employee.index_of_employee_for_portfolio;





export default employee_Slice.reducer
