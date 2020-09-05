import { TOGGLE_LOADER } from "./types"

export const toggleLoader = (val) => dispatch => {
    return dispatch({
        type: TOGGLE_LOADER,
        payload: val
    })
}