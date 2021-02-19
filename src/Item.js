import React from 'react'

const Item = ({item, handleUserChange}) => {

    const handleClick = () => {
        handleUserChange(item.id)
    }

    return (
        <li className={`List__item List__item--${item.color}${item.isSelected ? ' item--active' : ''}`}
            onClick={handleClick}
        >
            {item.name}
        </li>
    )
}

export default Item;