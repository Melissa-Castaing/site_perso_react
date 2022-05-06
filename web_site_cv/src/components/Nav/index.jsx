import { NavLink } from 'react-router-dom';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import './style.scss';

export default function Nav() {
  const navButton = [
    {
      id: 1,
      nav: 'A propos',
      road: '/',
    },
    {
      id: 2,
      nav: 'Mon parcours',
      road: '/parcours',
    },
    {
      id: 3,
      nav: 'Mes skills',
      road: '/skills',
    },
    {
      id: 4,
      nav: 'Mes projets',
      road: '/projets',
    },
    {
      id: 5,
      nav: 'Me contacter',
      road: '/contact',
    },
  ];
  return (
    <div className="nav">
      { navButton.map((button) => (
        <NavLink
          key={button.id}
          to={`${button.road}`}
          className="nav_link"
          activeclassname="selected"
        >
          {button.nav}
        </NavLink>
      ))}
      <a href="https://www.linkedin.com/in/m%C3%A9lissa-castaing-9b69a9235/"><img className="nav_social" src={linkedin} alt="Linkedin icon" width="30px" /></a>
      <img className="nav_social" src={github} alt="Github" />
    </div>
  );
}
