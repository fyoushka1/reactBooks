import React from 'react';
import index from "classnames";

const Categories = React.memo(({activeCategory, items, onClickCategory}) => {

    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => onClickCategory(null)}
                    className={activeCategory === null ? 'active' : ''}
                >
                    Все
                </li>
                {items &&
                items.map((name, index) => (
                    <li className={activeCategory === index ? 'active' : ''}
                        onClick={() => onClickCategory(index)}
                        key = {index}>{name}
                    </li>
                ))
                }
            </ul>
        </div>
    );
    }
)
export default Categories;