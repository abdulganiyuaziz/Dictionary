import Base from "./Base"
import {useState} from "react"
import { UserContext } from "./App"
import { useContext } from "react"

function Service() {
    const [activity, setActivity] = useState('Go back for laptop')
    const [date, setDate] = useState('01/08/2023')
    const user = useContext(UserContext)
    const handleClick = (evt) =>{
        evt.preventDefault()
        document.getElementById('info').innerText = activity;
        document.getElementById('data').innerText = date;
    }
    return(
        <>
        <Base />
        
        <form onSubmit={handleClick}>
            
            <label for='activity' >Activity</label>
            <input type='text'  value={activity} onChange={(e)=>setActivity(e.target.value)} id='activity' />
            <label for='date' >Date</label>
            <input type='date' id="date"  value={date} onChange={(e)=>setDate(e.target.value)}  />
            <input type='submit' value='Submit' />
        </form>
        
<br/>
        <h1 className="h1">{user}'s ToDo List</h1>
        <table>
            <tr>
            <th>#ID</th>
            <th>Description</th>
            <th>Date</th>
            </tr>
            <tr><td>#0011</td>
            <td id="info"></td>
            <td id="data"></td></tr>
        </table>

        </>
    )
}

export default Service