import bootstrap from '../../assets/hardskills/bootstrap.png';
import css from '../../assets/hardskills/css.png';
import html from '../../assets/hardskills/HTML.png';
import js from '../../assets/hardskills/js.png';
import node from '../../assets/hardskills/node.png';
import postgres from '../../assets/hardskills/postgresql.png';
import react from '../../assets/hardskills/react.png';
import redux from '../../assets/hardskills/redux.png';
import semantic from '../../assets/hardskills/semanticUI.png';
import sql from '../../assets/hardskills/sql.png';
import './style.scss';

export default function HardSkills() {
  const logos = [
    {
      id: 1,
      name: 'bootstrap',
      image: bootstrap,
    },
    {
      id: 2,
      name: 'css',
      image: css,
    },
    {
      id: 3,
      name: 'html',
      image: html,
    },
    {
      id: 4,
      name: 'js',
      image: js,
    },
    {
      id: 5,
      name: 'node',
      image: node,
    },
    {
      id: 6,
      name: 'postresql',
      image: postgres,
    },
    {
      id: 7,
      name: 'react',
      image: react,
    },
    {
      id: 8,
      name: 'redux',
      image: redux,
    },
    {
      id: 9,
      name: 'semantic',
      image: semantic,
    },
    {
      id: 10,
      name: 'sql',
      image: sql,
    },
  ];
  return (
    <div className="hardSkills">
      <h1 className="hardSkills_title">
        Hard Skills
      </h1>
      {
      logos.map((logo) => (
        <img key={logo.id} className="hardSkills_logo" src={logo.image} alt={logo.name} />
      ))
      }
    </div>
  );
}
