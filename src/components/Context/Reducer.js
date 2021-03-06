export const initialState = {
    basket: [],
    wishlist: [],
    total: 0,
    user: {},
    userAddress: {Village: '', Thana: '', District: '', Division: '', Phone: '+880'},
    authenticated: false,
    loading: false
}

function reducer(state, action) {

    switch (action.type) {
        case 'ADD_TO_BASKET':
            let found = false;
            //Check book is in basket?
            state.basket.map(book => {
                if (book.id === action.item.id) {
                    book.amount++;
                    found = true;
                }
            })
            //If it is not found the add to basket
            if (!found){
                return {
                    ...state,
                    basket: [...state.basket, {...action.item, amount: 1}]
                };
            }
        case 'ADD_TO_WISHLIST':
            let exist = false;
            //Check book is in ishlist?
            state.wishlist.map(item => {
                if (item.id === action.item.id)
                    exist = true;
            })
            //If it is not found the add to wishlist
            if (!exist){
                return {
                    ...state,
                    wishlist: [...state.wishlist, action.item]
                };
            }
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                basket: state.basket.filter((value) => { return value.id !== action.itemId; })
            }
        case 'REMOVE_FROM_WISHLIST':
            return {
                ...state,
                wishlist: state.wishlist.filter((value) => { return value.id !== action.itemId; })
            }
        case 'CREATE_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_USER_PROFILE':
            return{
                ...state,
                userAddress: action.address
            }
        case 'SET_AUTHENTICATED':
            return {
                ...state,
                authenticated: true,
            };
        case 'SET_LOGOUT':
            return {
                ...state,
                authenticated: false,
                user: null,
            };
        default:
            return state;
    }
}

export default reducer;