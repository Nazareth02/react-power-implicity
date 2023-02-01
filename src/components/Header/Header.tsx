import "../Header/header.scss";

import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <a href="/#" className="logo">
          <LogoIcon />
        </a>
        <nav className="header__nav">
          <a href="/#" className="header__nav-link">
            Features
          </a>
          <a href="/#" className="header__nav-link">
            Partners
          </a>
          <a href="/#" className="header__nav-link">
            Stories
          </a>
        </nav>
        <button className="header__btn">Download for free</button>
      </div>
    </header>
  );
};
