import './style.scss';

export default function SoftSkills() {
  const softSkills = [
    {
      id: 1,
      name: 'Passionnée',
    },
    {
      id: 2,
      name: 'Perfectionniste',
    },
    {
      id: 3,
      name: 'Autonome',
    },
    {
      id: 4,
      name: 'Curieuse',
    },
    {
      id: 5,
      name: 'Travail en équipe',
    },
    {
      id: 6,
      name: 'Bonne humeur',
    },
    {
      id: 7,
      // eslint-disable-next-line quotes
      name: `Ouverture d'esprit`,
    },
    {
      id: 8,
      name: 'Déterminée',
    },
    {
      id: 9,
      name: 'Observatrice',
    },
  ];

  return (
    <div className="softSkills">
      <h1 className="softSkills_title"> Soft Skills</h1>
      <ul className="softSkills_list">
        {
        softSkills.map((skill) => (
          <li key={skill.id} className="softSkills_list_skills">{skill.name}</li>
        ))
        }
      </ul>
    </div>
  );
}
