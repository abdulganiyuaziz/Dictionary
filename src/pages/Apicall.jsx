import { useState, useEffect } from "react";
import Base from "./Base";

export default function ApiCall(){

    const [names, setNames] = useState([])
    const [gender, setGender] = useState('neutral')
                
    useEffect(() => {
        async function fetchName(){

            try {
                const response = await fetch(`https://api.api-ninjas.com/v1/babynames?gender=${gender}`,{
                    method: 'GET',
                    headers: {'X-Api-Key':'jvcbuJ7w4i85q/jG5OR8bw==modmrMaXe63OSRw3'},
                    content: 'application/json'
                });
                const data = await response.json();
                setNames(data);
                
            } catch (error) {
                alert(error)
            }
        }
        fetchName();
    }, [gender]);


    const myName = names.map(item =><li className="jaja" key={item}>{item}</li>) 
    


    return(

        <>        
        <Base />

        <select value={gender} onChange={(e)=>setGender(e.target.value)}>
        <option value='neutral'>Neutral</option>
        <option value='boy'>Boy</option>
        <option value='girl'>Girl</option>
        </select>

        <h1>10 {gender} names</h1>
        <ol>{myName}</ol>

        </>
    )



}