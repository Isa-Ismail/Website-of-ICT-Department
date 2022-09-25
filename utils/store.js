import { createContext, useReducer } from "react"


export const Store = createContext()

const initialState = {
    userToken: '',
    message: '',
    users: [],
    userInfo: {},
}

const reducer = (state, action) => {
    switch(action.type){
        case 'LOAD':
            return {
                ...state, users: action.payload
            }
        case 'LOGIN':
            return {
                ...state, userToken: action.payload
            }
        case 'USER':
            return {
                ...state, userInfo: action.payload
            }
        case 'REGISTER':
            return {
                ...state, message: action.payload
            }
        default:
            return state
    }
}

export const StoreProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = {state, dispatch}
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}