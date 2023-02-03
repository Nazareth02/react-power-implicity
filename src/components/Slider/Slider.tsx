import "./slider.scss";
import { SliderItem } from "../SliderItem/SliderItem";
export const Slider = () => {
  return (
    <div className="slider-wrapper">
      <SliderItem />
      <ul className="slider__dots">
        <li className="slider__dots__dot"></li>
        <li className="slider__dots__dot"></li>
        <li className="slider__dots__dot"></li>
        <li className="slider__dots__dot"></li>
        <li className="slider__dots__dot"></li>
      </ul>
    </div>
  );
};
export default Slider;
