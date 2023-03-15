import { createContext, useReducer, useContext } from "react";
import ckReducer, { initialState } from "../reducers/CKReducer";
import CKActions from "../actions/CKActions";

const CKContext = createContext(initialState);

export const CKProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ckReducer, initialState);

    const setPoems = (poems) => {
        dispatch({
            type: CKActions.SET_POEMS,
            payload: {
                poems: poems
            }
        });
    };

    const value = {
        poems: state.poems,
        setPoems,
    };

    return <CKContext.Provider value={value}>{children}</CKContext.Provider>;
};

const useCKContext = () => {
    const context = useContext(CKContext);

    if (context === undefined) {
        throw new Error("useShop must be used within CKContext");
    }

    return context;
};

export default useCKContext;