const initialState = {
    sortBy: 'name',
    category: null,
    page: 1

}

const filters = (state = initialState, action) => {
   switch (action.type) {
       case 'SET_SORT_BY':
           return{
               ...state,
               sortBy: action.payload,
           }
       case 'SET_CATEGORY':
           return {
               ...state,
               category: action.payload,
           }
       case 'SET_PAGE':
           return {
               ...state,
               page: action.payload
           }
       default:
           return state
   }

}

export default filters
