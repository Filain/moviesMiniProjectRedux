import {createSlice} from "@reduxjs/toolkit";

interface IState {
    theme:boolean
}
const initialState ={
    theme: false
}

const themeSlice = createSlice({
    name:'themeSlice',
    initialState,
    reducers:{
        themeChenge:(state, action) => {
            state.theme=action.payload
        }
    }
});

const {reducer:themeReducer, actions}=themeSlice;
const themeActions={...actions}

export {themeReducer,themeActions}
