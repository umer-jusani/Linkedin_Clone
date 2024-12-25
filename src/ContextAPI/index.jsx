import { createContext, useReducer } from "react";
import { initialState, reducer } from "../Reducers/Login";

const BioContext = createContext();


const BioProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <BioContext.Provider value={{ state, dispatch }}>
            {children}
        </BioContext.Provider>
    )
}

export { BioProvider, BioContext };
