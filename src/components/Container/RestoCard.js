import React from 'react';
import "./Container.css";
import { IMG_URL } from '../utils/constant';

export function RestoCard({props}) {
    const {name,cloudinaryImageId ,avgRating ,cuisines} = props;

  return (
    <div  className="block p-4 m-4 w-64 h-96 text-black no-underline border border-gray-400  rounded-lg shadow-xl bg-white hover:bg-transparent">
                <img className="h-52 w-full rounded-md object-cover shadow-black" 
                src={IMG_URL+cloudinaryImageId} 
                />
                <p className="font-medium text-base py-2">{name}</p>
                <p className='font-normal'>Rating :{avgRating} </p>
                <p className='font-normal break-words'>Cuisines : {cuisines.join(",")} </p>
             </div> 
  )
}

export const withDiscountedRestoCard =()=>{

  return(props)=>{
    
    const {aggregatedDiscountInfoV3} = props;
    const header = props?.props?.aggregatedDiscountInfoV3?.header;
    const subHeader = props?.props?.aggregatedDiscountInfoV3?.subHeader === undefined ? "" :props.props.aggregatedDiscountInfoV3.subHeader;
    return(
       <div className='relative'> 
        <label className='flex absolute top-4 left-8 rounded-md p-1 break-words font-extrabold text-blue-50 text-lg bg-slate-800'>{ header+ " " +subHeader  }</label>
        <RestoCard {...props}/>
       </div>
    )
  }
}