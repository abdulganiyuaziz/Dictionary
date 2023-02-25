import Base from "./Base"
import { UserContext } from "./App"
import { useContext } from "react"

function Home() {
    const [user] = useContext(UserContext)
    return(
        <>
        <Base />
        <center>
        <h1> welcome to the Home page</h1>
        </center>

        <li>English definitions</li> <br/>
          <p1>
     Choose from corpus-informed dictionaries for English language learners at all levels. 
    They’re ideal for anyone preparing for Cambridge English exams and IELTS. The English dictionary includes 
    the Cambridge Advanced Learner’s Dictionary, the Cambridge Academic Content Dictionary, and the Cambridge 
   Business English Dictionary. The Cambridge Learner’s Dictionary is perfect for intermediate learners.
        </p1>  <br/>

       <li>Translation Dictionaries</li> <br/>
  <p1>Check your understanding of English words with definitions in your own language using Cambridge's 
    corpus-informed translation dictionaries and the Password and Global dictionaries from K Dictionaries.</p1><br/>

     <li>English–Dutch</li><li>English–French</li> <li>English–German</li><li>English–Indonesian</li>
     <li>English–Italian</li>
<li>English–Japanese</li>
        </>
    )
}

export default Home