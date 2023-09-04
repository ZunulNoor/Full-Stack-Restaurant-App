export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            return { ...state, cart: [...state.cart, action.payload] }
        }
        case "UPDATE_CART": {
            return { ...state, cart: action.payload }
        }
        case "CHECKOUT": {
            return { ...state, cart: [] }
        }
        case "DELETE_ITEM": {
            const menuIdToDelete = action.payload;
            const updatedCart = state.cart.filter(item => item._id !== menuIdToDelete);
            return { ...state, cart: updatedCart };
        }
        default: {
            return state;
        }
    }
}