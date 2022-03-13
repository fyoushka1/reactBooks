import React from 'react';

import star from '../../assets/img/star.png'
import {type} from "@testing-library/user-event/dist/type";

const BookItem = ({id,name,images,rating,price,author,onAddBook,cartItemsCount}) => {
    const types = ['Электронная(PDF)', 'Бумажная']
    const [activeType, setActiveType] = React.useState(0)

    const onSelectType = (index) => {
        setActiveType(index)
    }
    const addToCart = () => {
        onAddBook({id,name,author, price, images, type: types[activeType]})
    }

    return (
        <div className="book-block">
            <div className="book-block__inner">
                <div className="book-block__wrapper">
                    <img
                        className="book-block__image"
                        src={images}
                        alt="book"
                    />
                    <div className="book-block__content">
                        <span>{rating}</span>
                        <img src={star} alt="start" className='book-block__star'/>
                    </div>
                </div>
                <p className="book-block__author">{author}</p>
                <h4 className="book-block__title">{name}</h4>
                <div className="book-block__selector">
                    <ul>
                        {
                            types.map((type, index) => (
                                <li
                                    key={index}
                                    className={activeType === index ? 'active' : ''}
                                    onClick={() => onSelectType(index)}
                                >
                                    {type}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="book-block__bottom">
                    <div className="book-block__price">от {price} ₽</div>
                    <button onClick={addToCart} type='button' className="button button--outline button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        <i>{!cartItemsCount ? '0' : cartItemsCount}</i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookItem;