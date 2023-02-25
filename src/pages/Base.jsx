import { Outlet, Link } from "react-router-dom";
import './Base.css'
import { UserContext } from "./App"
import { useContext } from "react"
const Base = ()=> {
    const [user] = useContext(UserContext)
    return(
        <>
        <nav className="nav">
        <ul className="ul">
            <li>
                <Link  className="link" to='/Home'>Home</Link>
            </li>
           
            <li>
            <Link className="link" to='/Dictionary'>Dictionary</Link>
            </li>

        </ul>

        </nav>
        <Outlet />
        </>
    )
}

export default Base;