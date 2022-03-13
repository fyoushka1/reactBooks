const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const getTotalPrice = (arr) => {
    return  arr.reduce((sum,obj) => obj.price + sum, 0)
}

const cart = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_TO_CART':
            const currentBooksItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items , action.payload]
            const newItems = {
                ...state.items,
                [action.payload.id]:{
                    items:currentBooksItems,
                    totalPrice: getTotalPrice(currentBooksItems)
                }
            }
            const items = Object.values(newItems).map(obj => obj.items)
            const allBooks = [].concat.apply([],items)
            return{
                ...state,
                items: newItems,
                totalCount:state.totalCount + 1,
                totalPrice: getTotalPrice(allBooks)
            }
        case 'CLEAR_CART':
            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0,
            }
        case 'REMOVE_CART_ITEM':
            const newItem = {
                ...state.items
            }
            const currentTotalPrice = newItem[action.payload].totalPrice
            const currentTotalCount = newItem[action.payload].items.length
            delete newItem[action.payload]
            return {
                ...state,
                items: newItem,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            }
        case 'PLUS_CART_ITEM':{
            const newItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0]
            ]
            const priceItem = newItems[0].price
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        items: newItems,
                        totalPrice: getTotalPrice(newItems),
                        totalCount: state.totalCount + 1,
                    }
                },
                totalPrice: state.totalPrice + priceItem,
                totalCount: state.totalCount + 1
            }
            }
        case 'MINUS_CART_ITEM':{
            const oldItems = state.items[action.payload].items
            const newItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems
            const priceItem = newItems[0].price
            console.log(state)
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        items: newItems,
                        totalPrice: getTotalPrice(newItems),
                        totalCount: state.totalCount - 1
                    }
                },
                totalPrice: state.items[action.payload].items.length === 1 ? state.totalPrice : state.totalPrice - priceItem,
                totalCount: state.items[action.payload].items.length === 1 ? state.totalCount : state.totalCount - 1
            }

            }
        default:
            return state
    }
}
export default cart