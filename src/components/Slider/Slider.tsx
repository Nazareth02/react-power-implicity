import { SliderItem } from "../SliderItem/SliderItem";
import "./slider.scss";
export const Slider = () => {
  return (
    <div className="slider-wrapper">
      <SliderItem />
      <ul className="slider__dots">
        <li className="slider__dot"></li>
        <li className="slider__dot"></li>
        <li className="slider__dot"></li>
        <li className="slider__dot"></li>
        <li className="slider__dot"></li>
      </ul>
    </div>
  );
};
export default Slider;
