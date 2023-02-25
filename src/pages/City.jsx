import Base from "./Base"
import { useState, useEffect } from "react"
export default function City(){

    const [city, setCity] = useState('Accra')
    const [info, setInfo] = useState({})

    useEffect(() => {
        handleClick()
    }, []);    

    function handleClick() {
        async function fetchName(){
            try {
                const response = await fetch(`https://api.api-ninjas.com/v1/city?name=${city}`,{
                    method: 'GET',
                    headers: {'X-Api-Key':'jvcbuJ7w4i85q/jG5OR8bw==modmrMaXe63OSRw3'},
                    content: 'application/json'
                });
                const data = await response.json();
                setInfo(data);
                console.log(data)
                
            } catch (error) {
                alert(error)
            }
        }
        fetchName();
    }

    return(
        <>
        <Base />
        <input type='text' value={city} 
        onChange=
        {(evt)=>setCity(evt.target.value)} placeholder='Type city name here'>
        </input>
        <button onClick={handleClick}>Send Request</button>
 
       <h4>
        {JSON.stringify(info[0])}
       </h4>

        </>
    )
}
