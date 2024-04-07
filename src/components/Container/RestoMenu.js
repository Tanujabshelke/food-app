import Menu from "./Menu";
import ShimmerEffect from "./ShimmerEffect";
import { useParams } from "react-router-dom";
import useFetchData from "../utils/useFetchData";
import { RESTO_MENU } from "../utils/constant";

const RestoMenu = (props) => {
  
  let {resId} = useParams();
  let restaurantId = resId.slice(1,);
  let resInfo = useFetchData( RESTO_MENU + restaurantId);

    if(resInfo === null){
      return <ShimmerEffect />
    }

    const _menuCard = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const _menu = _menuCard.filter(data => data?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );
    console.log(resInfo)
  return (
    <div className="w-4/12 flex flex-col item-center m-auto ">
      <span className="font-bold text-xl my-5">{resInfo?.cards[2]?.card?.card?.info?.name}</span>
      {_menu.length && _menu.map(category =>{
         return <Menu data={category}/>
      })}
      {/* <h1>{name} </h1>
      <h2>Menu</h2>
      <h3>cuisines - {cuisines.join(",")}</h3>
      <p>{costForTwoMessage}</p>
      <ul>
        {menu.length > 0 && menu.map((item,index) => {

          return (
            <li key={index}>
              <Menu item={item} />
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default RestoMenu;
