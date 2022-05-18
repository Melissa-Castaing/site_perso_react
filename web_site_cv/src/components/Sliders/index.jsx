import { useState } from 'react';
import cultura from '../../assets/exp_forma/cultura.jpg';
import leclerc from '../../assets/exp_forma/leclerc.jpg';
import caisse from '../../assets/exp_forma/caisse.jpg';
import BtnSlider from '../MultiSlider/BtnSlider';
import './style.scss';

export default function Slider() {
  const expArticles = [
    {
      id: 1,
      title: 'Cultura',
      subtitle: 'CDI, Bordeaux, Bègles',
      job: 'Conseillère de vente Gaming',
      image: cultura,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book.`,
      date: '2016-2022',
    },
    {
      id: 2,
      title: 'Leclerc',
      subtitle: 'CDD, Bordeaux, Léognan',
      job: 'Hôtesse de caisse',
      image: caisse,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book.`,
      date: 'Mai-juin 2015',
    },
    {
      id: 3,
      title: 'Leclerc',
      subtitle: 'CDD, Bordeaux, Léognan',
      job: 'Vendeuse Espace Culturel',
      image: leclerc,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book.`,
      date: 'Mai-juin 2014',
    },
  ];

  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== expArticles.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === expArticles.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(expArticles.length);
    }
  };

  return (
    <div className="container-slider">
      {
      expArticles.map((exp, index) => (
        <div key={exp.id} className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}>
          <img src={exp.image} alt={exp.title} />
          <div className="slider_titles">
            <h1 className="slider_titles_first">{exp.title}</h1>
            <h2 className="slider_titles_second">{exp.subtitle}</h2>
            <h3 className="slider_titles_second">{exp.job}</h3>
            <p className="slider_titles_describe">{exp.description}</p>
            <p className="slider_titles_date">{exp.date}</p>
          </div>
        </div>
      ))
      }
      <BtnSlider moveSlide={nextSlide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="previous" />
    </div>
  );
}
