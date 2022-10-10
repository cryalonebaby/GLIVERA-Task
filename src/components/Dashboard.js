import {ReactComponent as Search} from '../assets/search.svg';
import db from '../db'

const USERS_ON_PAGE = 8

const Dashboard = ({page, increase, decrease, setPage}) => {

  const getPageAmount = (entries, amount) => {
    const pages = Math.ceil(entries/amount)
    let result = []
    for(let i = 1; i <= pages; i++) {
      result.push(i)
    }
    return result
  }

  const pageAmount = getPageAmount(db.length, USERS_ON_PAGE)
  console.log(pageAmount);

  const FIRST = page * USERS_ON_PAGE
  const LAST = page + 1 === pageAmount.length ? db.length : (page + 1) * USERS_ON_PAGE

  console.log(page);
  
  return (
    <div className='dashboard'>
      <div className='dashboard-header'>
        <div className='dashboard-header-left'>
          <span className='dashboard-header-left-big'>All Customers</span>
          <span className='dashboard-header-left-small'>Active Members</span>
        </div>
        {/* <div className='dashboard-header-right'>
          <Search/>
          <span className='dashboard-header-right-text'>Search</span>
        </div> */}
        <label className='dashboard-header-right'>
          <input type={'text'} placeholder="Search"></input>
        </label>
      </div>
      <div className='dashboard-table'>
        <table className='table'>
          <thead>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </thead>
          <tbody>
            {
              db.slice(FIRST, LAST).map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td data-label='Customer Name'>{item.name}</td>
                    <td data-label='Company'>{item.company}</td>
                    <td data-label='Phone Number'>{item.number}</td>
                    <td data-label='Email'>{item.email}</td>
                    <td data-label='Country'>{item.country}</td>
                    <td data-label='Status'>
                      {item.status ? 
                        <span className='status status-active'>Active</span> : 
                        <span className='status status-inactive'>Inactive</span>
                      }     
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <div className='dashboard-footer'>
        <div className='dashboard-footer-left'>
          <span>Showing data {FIRST + 1} to {LAST} of {db.length} entries</span>
        </div>
        <div className='dashboard-footer-right'>
        <div onClick={() => decrease()} className='dashboard-footer-right-number dashboard-footer-right-previos'>{`<`}</div>
          {pageAmount.map(num => {
            return (
              <div onClick={() => setPage(num - 1)} key={num+Math.random()} className={`dashboard-footer-right-number ${page + 1 === num ? 'dashboard-footer-right-number-active' : ''}`}>
                {num}
              </div>
            )
          })}
          <div onClick={() => increase(page, pageAmount.length)} className='dashboard-footer-right-number dashboard-footer-right-next'>{`>`}</div>
          {/* <div className='dashboard-footer-right-number dashboard-footer-right-number-active'>1</div>
          <div className='dashboard-footer-right-number'>2</div>
          <div className='dashboard-footer-right-number'>3</div>
          <div className='dashboard-footer-right-number'>4</div>
          <div className='dashboard-footer-right-number dashboard-footer-right-number-pagination'>...</div>
          <div className='dashboard-footer-right-number'>40</div> */}
        </div>
      </div>
    </div>
  )
}

export default Dashboard