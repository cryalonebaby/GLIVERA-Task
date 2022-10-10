import {ReactComponent as Logo} from '../assets/logo.svg';
import {ReactComponent as Profile} from '../assets/profile.svg';
import {ReactComponent as First} from '../assets/1.svg';
import {ReactComponent as Second} from '../assets/2.svg';
import {ReactComponent as Third} from '../assets/3.svg';
import {ReactComponent as Fourth} from '../assets/4.svg';
import {ReactComponent as Fifth} from '../assets/5.svg';
import {ReactComponent as Sixth} from '../assets/6.svg';
import Link from './Link';

const Navbar = ({isOpen}) => {
  return (
    <div className={`navbar ${isOpen ? 'navbar-open' : 'navbar-close'}`}>
      <div className='nav-header'>
        <Logo/>
        <div className='nav-header-text'>
          <span className='nav-header-title'>Dashboard</span>
          <span className='nav-header-version'>v.01</span>
        </div>
      </div>
      <div className='nav-body'>
        <Link title='Dashboard' icon={<First/>}/>
        <Link title='Product' icon={<Second/>}/>
        <Link title='Customers' active={true} icon={<Third/>}/>
        <Link title='Income' icon={<Fourth/>}/>
        <Link title='Promote' icon={<Fifth/>}/>
        <Link title='Help' icon={<Sixth/>}/>
      </div>
      <div className='nav-profile'>
        <Profile/>
        <div className='nav-profile-info'>
          <span className='nav-profile-info-name'>Evano</span>
          <span className='nav-profile-info-rank'>Project Manager</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar