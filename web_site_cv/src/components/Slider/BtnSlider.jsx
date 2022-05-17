/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import leftArrow from '../../assets/images/left_arrow.png';
import rightArrow from '../../assets/images/right_arrow.png';
import './style.scss';

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
      onClick={moveSlide}
    >
      <img src={direction === 'next' ? rightArrow : leftArrow} alt="Bouton précédent" />
    </button>
  );
}

BtnSlider.propTypes = {
  direction: PropTypes.string.isRequired,
  moveSlide: PropTypes.func.isRequired,
};
