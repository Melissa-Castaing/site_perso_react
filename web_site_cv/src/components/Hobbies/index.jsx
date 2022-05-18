import Slider from '../MultiSlider';
import './style.scss';

export default function Hobbies() {
  return (
    <div className="hobbies">
      <h1 className="hobbies_title"> Hobbies </h1>
      <div className="hobbies_title_list">
        <h2 className="hobbies_title_list_second"> Jeux vidéo </h2>
        <h2 className="hobbies_title_list_second"> Livres/Mangas </h2>
        <h2 className="hobbies_title_list_second"> Musique </h2>
      </div>
      <Slider />
    </div>
  );
}
