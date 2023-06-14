import React, { useEffect, useState } from "react";

const FetchApi = ()=>{

    const [data,setData] = useState([]);

    useEffect(()=>{
        apiGet();
    },[])

    const apiGet = ()=>{
  fetch('https://api-ninjas.com/api/nutrition.')
  .then((response) => response.json())
  .then((json) =>{
   console.log(json)
   setData(json)
   .catch(err => console.log(err))
});
}
    return(
        <>
        <div>
            My Api <br/>
            <pre>{JSON.stringify(data,null,2)}</pre>
            <button className="border-2 border-black p-2" onClick={()=>apiGet()}>Fetch API</button>
        </div>
        </>
    )
}
export default FetchApi;