import { useEffect, useState } from "react";


const useFetchData =(url)=>{
    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        const data = await fetch(url);
        const json = await data.json();
        setResInfo(json.data);
    }
    return resInfo;
}

export default useFetchData;