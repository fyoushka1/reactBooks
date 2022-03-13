import React from 'react';
import BookItem from "../BookItem/BookItem";
import BooksLoaderList from "../BooksLoaderList/BooksLoaderList";
import {useDispatch, useSelector} from "react-redux";
import {addBooks} from "../../redux/actions/cart";
import EmptyBooksList from "../EmptyBooksList/EmptyBooksList";


const BooksList = ({books, isLoaded}) => {
    const {cartItems} = useSelector((state) => {
        return{
            cartItems: state.cart.items
        }
    })
    const dispatch = useDispatch()

    const onAddBook = (obj) => {
        dispatch(addBooks(obj))
    }
    return (
        <div className="content__items">
            {
                isLoaded ?
                    books.map(book => (
                        <BookItem
                            onAddBook={onAddBook}
                            key = {book.id}
                            id = {book.id}
                            name = {book.name}
                            cartItemsCount = {cartItems[book.id] &&
                            cartItems[book.id].items.length}
                            images = {book.imageUrl}
                            rating = {book.rating}
                            price = {book.price}
                            author = {book.author}
                        />)) : <BooksLoaderList/>
            }
        </div>
    );
};

export default BooksList;