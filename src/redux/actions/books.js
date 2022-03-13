import axios from "axios";

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload
})

export const fetchBooks = (category,sortBy,page) => (dispatch) => {
    console.log(page)
    dispatch(setLoaded(false))
    axios.get(`https://620e0e66585fbc3359d52eda.mockapi.io/books?page=${page}&limit=12&${category !== null ? `category=${category}` : '' }&sortBy=${sortBy}`).then(({data}) => {
        dispatch(setBooks(data))
    })
}


export const setBooks = (items) => ({
    type: 'SET_BOOKS',
    payload: items
})