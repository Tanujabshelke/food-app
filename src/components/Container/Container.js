import React from "react";
import "./Container.css";
import {RestoCard , withDiscountedRestoCard} from "./RestoCard";
import Search from "../Search/Search";
import ShimmerEffect from "./ShimmerEffect";
import { Link } from "react-router-dom";
import { HOME_URL } from "../utils/constant";


function Container() {
  const [filterData,setFilterData] = React.useState([]);
  const [restoData,setRestoData] = React.useState([]);
  const [value, setValue] = React.useState("");  
  const DiscountedRestoCard = withDiscountedRestoCard(RestoCard);
  
React.useEffect(()=>{
    fetchData();
  },[])

const fetchData=async()=>{
    const data = await fetch(HOME_URL);
    const json = await data.json();
    let _resinfo = json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestoData(_resinfo);
    setFilterData(_resinfo);
}
 
  const handleTopRatedResto = () => {
    setFilterData((p) => {
      let temp = p.filter((a, b) => a.info.avgRating > 4);
      return temp;
    });
  };

  const handleTextChange = (e) => {
    setValue(e.target.value);
  };

  const handleSerachClick = () => {
    let filteredValue = restoData.filter((val) => {
      return val.info.name.toUpperCase().includes(value.toUpperCase());
    });
    setFilterData(filteredValue);
  };

  if (filterData.length === 0){
    return <ShimmerEffect />;
  }
  console.log("filterData",filterData )
  return (
    <div className="container ">
      <Search
        onClick={handleTopRatedResto}
        onTextChange={handleTextChange}
        onSerachClick={handleSerachClick}
        value={value}
      />
      <h1>Restaurants with online food delivery in Pune</h1>
        <div className="sub-container">
          {filterData.map((resto) => {
            return (
              <Link key={resto.info.id} to={"/restaurants/:" + resto.info.id} class="text-black">
                {resto.info.aggregatedDiscountInfoV3 ? <DiscountedRestoCard props={resto.info}/> :
                <RestoCard props={resto.info} />
            }
              </Link>
            );
          })}
        </div>
    </div>
  );
}

export default Container;
