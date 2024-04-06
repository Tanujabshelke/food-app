import React from  'react';
import { MENU_URL } from '../utils/constant';

const Menu=(props)=>{
    const {name,description,imageId,price,defaultPrice} = props.item.card.info;

    return (<div className="menu-container">
        <div className="menu-descn">
            <h4>{name}</h4>
            <p className="menu-price">Rs - {defaultPrice ? defaultPrice/100 : price/100} </p>
            <p>{description}</p>
        </div>
        <img className='menu-img' src={MENU_URL + imageId}  alt="menu"/>
    </div>)
}

export default Menu;