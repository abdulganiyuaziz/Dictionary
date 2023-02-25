import React, {useState,useEffect} from "react";

export default function Facts(){

    const [data, setData] = useState([])

    const limit = 10;

     useEffect(()=>{

        fetch(`https://api.api-ninjas.com/v1/facts?limit=${limit}`,
        {
            method: 'Get',
            headers: {'X-Api-Key':'jvcbuJ7w4i85q/jG5OR8bw==modmrMaXe63OSRw3'},
            content: 'application/json'
        }).then((res)=> res.json()).then((data)=>{
            setData(data);
            console.log(data)
        }).catch((e)=>{
            console.error('Error', e) 
    });

}, [])

if (data.length > 0){
    return(
        <ol>
           {data.map((fact,index)=>{
            return<li key={index}>{fact.fact}</li>
           })} 
               </ol>
    )
   
}
else{
    return <h1>Loading.....</h1>
}


}
