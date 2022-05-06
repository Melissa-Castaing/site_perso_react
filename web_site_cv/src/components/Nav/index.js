import { NavLink } from 'react-router-dom';
import './style.scss';

export default function Nav() {
    return(
        <div className="nav"> 
        <NavLink to="/" activeclassname="selected">
            A propos
        </NavLink>
        <NavLink to="/parcours" activeclassname="selected">
            Mon Parcours
        </NavLink>
        <NavLink to="/skills" activeclassname="selected">
            Skills
        </NavLink>
        <NavLink to="/projets" activeclassname="selected">
            Mes projets
        </NavLink>
        <NavLink to="/contact" activeclassname="selected">
            Contact
        </NavLink>
         </div>
    )
}