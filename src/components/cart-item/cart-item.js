import React from 'react';

import './cart-item.scss';

const CartItem = ({item : {imageUrl, price, name, quantity, title} }) => {
    return(
        <div className="cart-item">
            <div className="cart-image" style={{backgroundImage:`url(${imageUrl})`}}  />
            <div className="item-details">
                <div className="name Heading" >{name}</div>
                <div className="name Heading" >{title}</div>

                <div className="price heading" >{quantity} x {price}</div>

            </div>
        </div>
    )
}

export default CartItem;