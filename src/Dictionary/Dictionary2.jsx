
import { useState, useEffect } from "react";


export default function Dictionary() {


    const [word, setWord] = useState('')
    const [data, setData] = useState([])


    console.log(data)

    useEffect(()=>{
        handleSubmit()
    }, []);

    function handleSubmit() {
        word.length === 0 ? document.getElementById("error", "result").innerHTML = `Do provide a word to display its meaning.`  : handleClick()
    }

    function handleClick() {
        fetch(`https://api.api-ninjas.com/v1/dictionary?word=${word}`, 
            { method: 'GET',
            headers: {'X-Api-Key': 'Pr8Yx5In0nivYbg59LvBOw==pbK8QqiviAsX6HVO'},
            content: 'application/JSON'
                  
            }).then((res)=> res.json()).then((data)=>{
            setData(data);
            console.log(data)
                          
            }).catch((e) =>{
            console.error('Error', e)
            });

    };

    const define = Object.keys(data).map((definition)=>{
        return<><br></br><li>Definition: {data.definition}</li></>
    })

    const validity = Object.keys(JSON.stringify(data)).map((valid)=>{
        return(<><li>{(JSON.stringify(data.valid))}</li></>)})

    return(
        <center>
        
        <div className="main">
            <center >
                <h1>Welcome to Dictionary Page</h1>
                
            </center>
            <div className='sub'>
                <div className="input">
                    <input className="txt" type='text' onChange={(e)=>setWord(e.target.value)} placeholder="Type desired word"></input>
                    <br></br>
                    <ul>{validity[0]}</ul>
                    <br></br>
                    
                    <button onClick={handleSubmit}>Search</button>
                    <br></br>
                    <br></br>
                    
                    <ul id="error"></ul>
                </div> 
                <div className="result">
                    <div>
                    <ul id="result"><br></br>{define[0]}</ul><br></br>
                    </div>
                </div>
            </div>
        </div>
        
        </center>
    )

}