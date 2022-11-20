import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as LibraryIcon } from "../../assets/icons/librarysvg.svg";
import { ReactComponent as TMDB } from "../../assets/icons/TMDB-logo.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";

const Nav = () => {
  return (
    <div className={s.nav}>
      <ul>
        <li className={s.li}>
          <NavLink to={`/home`} data-title="Фильмы">
            <HomeIcon className={s.icon} />
          </NavLink>
        </li>

        {/*<li className={s.li}>*/}
        {/*  <NavLink to='/library' data-title="История">*/}
        {/*    <LibraryIcon className={s.icon}/>*/}
        {/*  </NavLink>*/}
        {/*</li>*/}

        <li className={s.li}>
          <NavLink to="/search" data-title="Поиск">
            <Search className={s.icon} />
          </NavLink>
        </li>
      </ul>

      <TMDB className={s.TMDB} />
    </div>
  );
};

export default Nav;
