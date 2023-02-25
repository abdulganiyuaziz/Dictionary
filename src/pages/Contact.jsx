import Base from "./Base"
import { UserContext } from "./App"
import { useContext } from "react"
function Contact() {
    const user = useContext(UserContext)

    return(
        <>
        <Base />
        <h1>This is Contact Page</h1>
        <p>We are excited to have you here, {user}</p>
        </>
    )
}

export default Contact