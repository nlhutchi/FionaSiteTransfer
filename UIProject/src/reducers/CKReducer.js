import Actions from "../actions/CKActions";

export const initialState = {
    poems: []
};
  
const ckReducer = (state, action) => {
    const { type, payload } = action;
  
    switch (type) {
        case Actions.SET_POEMS:
    
            return {
                ...state,
                poems: payload.poems
            };
        default:
            throw new Error(`No case for type ${type} found in shopReducer.`);
    }
};
  
export default ckReducer;
  