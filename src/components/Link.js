import {ReactComponent as Arrow} from '../assets/arrow.svg';

const Link = ({icon, title, active}) => {
  return (
    <div className={`nav-body-link ${active ? 'nav-body-link-active' : ''}`}>
      {icon}
      <div className={`nav-body-link-title ${active ? 'nav-body-link-title-active' : ''}`}>{title}</div>
      <Arrow className={`arrow ${active ? 'arrow-active' : ''}`}/>
    </div>
  )
}

export default Link