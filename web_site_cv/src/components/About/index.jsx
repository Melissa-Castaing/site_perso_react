import profil from '../../assets/images/profil.jpg';
import './style.scss';

export default function About() {
  return (
    <div className="about">
      <p className="about_describe">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised in
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.

      </p>
      <img className="about_profil" src={profil} alt="Profil de Mélissa Castaing" />
    </div>
  );
}
