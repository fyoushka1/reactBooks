import React from 'react';
import Categories from "../../components/Categories/Categories";
import SortPopup from "../../components/SortPopup/SortPopup";
import {setCategory, setPage, setSortBy} from "../../redux/actions/filters"
import {useSelector, useDispatch} from "react-redux";
import {fetchBooks} from "../../redux/actions/books";
import BooksList from "../../components/BooksList/BooksList";
import Pagination from "../../components/Pagination/Pagination";
import EmptyBooksList from "../../components/EmptyBooksList/EmptyBooksList";


const categoriesNames = ['Фантастика', 'Классика жанра', 'Фэнтези', 'Хобби / увлечения' ]
const sortItems =  [
    {name:'рейтингу', type: 'rating'},
    {name:'цене', type: 'price'},
    {name:'алфавиту', type: 'name'}
]


const Home = (callback, deps) => {
    const dispatch = useDispatch()
    const {books,isLoaded,sortBy,category,page} = useSelector((state) => {
        return{
            books: state.books.items,
            isLoaded: state.books.isLoaded,
            sortBy: state.filters.sortBy,
            category: state.filters.category,
            page: state.filters.page
        }
    })

    React.useEffect(() => {
        dispatch(fetchBooks(category,sortBy,page))
    },[category,sortBy,page])

    const onSelectCategory = React.useCallback( (index) => {
        dispatch(setCategory(index))
    },[dispatch])
    const onSelectSortBy = React.useCallback((type) => {
        dispatch(setSortBy(type))
    },[dispatch])
    const onPagination = (page) => {
        dispatch(setPage(page))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickCategory = {onSelectCategory}
                    activeCategory = {category}
                    items = {categoriesNames}
                />
                <SortPopup
                    onClickSortBy = {onSelectSortBy}
                    activeSortType = {sortBy}
                    items = {sortItems}
                />
            </div>
            <h2 className="content__title">Все книги</h2>
            {
                (isLoaded && books.length === 0)
                    ?
                    <EmptyBooksList/>
                    :
                    <BooksList
                        books={books}
                        isLoaded = {isLoaded}
                    />
            }
            <Pagination onPagination = {onPagination} page = {page}/>
        </div>

    );
};

export default Home;