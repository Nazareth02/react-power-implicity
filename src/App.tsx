import { Header } from "./components/Header/Header";
import { Slider } from "./components/Slider/Slider";
import "./ui/main-template.scss";
import "./ui/reset.scss";

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Slider />
    </div>
  );
};
