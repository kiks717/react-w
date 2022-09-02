import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import React, {useState} from 'react'
import Basket from './Cart/Basket'
const Home = () => {
    const [isOpen, setOpen] = useState(false)

    const toggle = () => {
      setOpen(!isOpen)
    }
  return (
    <div>
        <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
          <Basket isOpen={isOpen} toggle={toggle}/>
    </div>
  )
}

export default Home
