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
    
    const menu = resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];
    const {name ,cuisines,costForTwoMessage } = resInfo.cards[0]?.card?.card?.info;
console.log("menu",resInfo);
  return (
    <div className="restoMenu-container">
      <h1>{name} </h1>
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
      </ul>
    </div>
  );
};

export default RestoMenu;
