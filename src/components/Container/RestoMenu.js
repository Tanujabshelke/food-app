import React from "react";
import ItemList from "./ItemList";
import ShimmerEffect from "./ShimmerEffect";
import { useParams } from "react-router-dom";
import useFetchData from "../utils/useFetchData";
import { RESTO_MENU } from "../utils/constant";
import RestoCategory from "./RestoCategory";



const RestoMenu = (props) => {
  
  let {resId} = useParams();
  let restaurantId = resId.slice(1,);
  let resInfo = useFetchData( RESTO_MENU + restaurantId);

  const [showIndex ,setShowIndex] = React.useState(null);

    if(resInfo === null){
      return <ShimmerEffect />
    }

    const _menuCard = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const _menu = _menuCard.filter(data => data?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );

    return (
    <div className="flex flex-col  w-10/12 mx-auto">
      <div className="flex-auto mx-auto my-5">
         <span className="font-bold text-xl " >{resInfo?.cards[2]?.card?.card?.info?.name}</span>
      </div>
      {_menu.length && _menu.map((category ,index) =>{
         return <RestoCategory data={category} 
                               show={showIndex === index ? true : false}
                               setShowIndex={setShowIndex}
                               index={index}
                               />
      })}
    </div>
  );
};

export default RestoMenu;
