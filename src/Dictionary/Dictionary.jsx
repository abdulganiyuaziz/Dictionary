import Base from "../pages/Base";
import { useState, useEffect } from "react"
export default function Dictionary(){

    const [Dictionary, setDictionary] = useState('')
    const [info, setInfo] = useState({})

    useEffect(() => {
        handle()
    }, []);    

    function handle() {
        async function fetchName(){
            try {
                const response = await fetch(`https://api.api-ninjas.com/v1/dictionary?word=${Dictionary}`,{
                    method: 'GET',
                    headers: {'X-Api-Key':'jvcbuJ7w4i85q/jG5OR8bw==modmrMaXe63OSRw3'},
                    content: 'application/json'
                });
                const info = await response.json();


                setInfo(info);
                console.log(info)
                
            } catch (error) {
                alert(error)
            }
        }
        fetchName();
    }
    const define = Object.keys(info).map((definition)=>{
        return<><br></br><li>Definition: {info.definition}</li></>
    })
    
    return(
        <center>
            <Base />
            <center>
        <h1> welcome to the Dictionary page</h1>
        </center>
            <input 
                type='text' 
                value={Dictionary} 
                onChange={(evt)=>setDictionary(evt.target.value)} 
                placeholder='Type word here'> 
            </input>

            <button onClick={handle}>Send Request</button>
        
            <div className="box">
            <h4>
                
            {define[0]}
              
            </h4>
            </div>
            
      
        </center>
    )
}





