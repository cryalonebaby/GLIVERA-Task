import Navbar from "../components/Navbar"
import Main from "../components/Main"
import {FiMenu} from 'react-icons/fi'
import { useState } from "react"

const Customers = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='container'>
      <Navbar isOpen={isOpen}/> 
      <span className="container-menu" onClick={() => setIsOpen(true)}>
        <FiMenu size={30}/>
      </span>
      <Main setIsOpen={setIsOpen}/>
    </div>
  )
}

export default Customers