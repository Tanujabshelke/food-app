import React from "react";
import { MENU_URL } from "../utils/constant";

const Menu = ({ data }) => {
  // const {name,description,imageId,price,defaultPrice} = props.item.card.info;
  console.log("props", data);
  return (
    <div className="flex my-4 shadow  p-4 border-b-1">
      <div>
        <span className="font-bold text-l text-slate-700">
          {data?.card?.card?.title}
        </span>
        <span>
        {String.fromCodePoint('0x1f603')}
        </span>
      </div>
    </div>
  );
};
{
  /* <div className="menu-descn">
            <h4>{name}</h4>
            <p className="menu-price">Rs - {defaultPrice ? defaultPrice/100 : price/100} </p>
            <p>{description}</p>
        </div>
        <img className='menu-img' src={MENU_URL + imageId}  alt="menu"/> */
}

export default Menu;
