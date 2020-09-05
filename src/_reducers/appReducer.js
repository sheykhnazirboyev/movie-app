import { TOGGLE_LOADER } from "../_actions/types";

 const initialState = {
    loading: false
 };

 export default function (state = initialState, action ){
     switch(action.type){
         case TOGGLE_LOADER:
             return {...state, loading: action.payload}
         default: return state
     }
 }