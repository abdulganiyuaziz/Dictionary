import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Base from "./Base";
import Dictionary from "../Dictionary/Dictionary";
import {useState, createContext} from 'react'

export const UserContext = createContext()

export default function App() {

    const user = useState('Daniel')
    return(
        <UserContext.Provider value={user}>
        <BrowserRouter>
            <Routes>
            <Route path="/" element= {<Base />} />
            <Route path="Home"  element={<Home />} />
            <Route path="Dictionary"  element={<Dictionary />} />

            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    )
}