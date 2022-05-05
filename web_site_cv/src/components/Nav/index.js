import { NavLink } from 'react-router-dom';
import './style.scss';

export default function Nav() {
    return(
        <div className="nav"> 
        <NavLink to="/" activeClassName="selected">
            A propos
        </NavLink>
         </div>
    )
}