import {useState} from 'react'
import Dashboard from './Dashboard'

const Main = ({setIsOpen}) => {
  const [page, setPage] = useState(0)

  console.log(page);

  const increase = (page, allPages) => {
    if(page + 1 < allPages) {
      setPage(prev => prev + 1)
    }
  }
  const decrease = () => {
    if(page > 0) {
      setPage(prev => prev - 1)
    }
  }
  return (
    <div className='main' onClick={() => setIsOpen(false)}>
      <div className='main-body'>
        <span className='main-body-title'>Hello Evano 👋🏼,</span>
        <Dashboard page={page} increase={increase} decrease={decrease} setPage={setPage}/>
      </div>
    </div>
  )
}

export default Main