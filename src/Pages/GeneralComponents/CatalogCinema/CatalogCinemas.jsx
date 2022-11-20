import s from "../Main.module.css";
import { ReactComponent as Date } from "../../../assets/icons/calendar-icon.svg";
import { ReactComponent as Popularity } from "../../../assets/icons/view-icon.svg";
import { NavLink } from "react-router-dom";

const CatalogCinemas = (props) => {
  return props.data.map((e) => (
    <NavLink to={"/cinema/id/" + e.id} className={s.cinema} key={e.id}>
      <div className={s.body}>
        <div className={s.title}>{e.title} </div>
        <div className={s.overview}>{e.overview}</div>
        <div className={s.bodyBottom}>
          <div>
            <Date className={s.releaseDataIcon} />
            <span className={s.releaseData}>{e.release_date}</span>
          </div>
          <div>
            <Popularity className={s.popularityIcon} />
            <span className={s.popularity}>{e.popularity}</span>
          </div>
        </div>
      </div>
      <div className={s.poster}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
          alt="Обложка Фильма"
        />
      </div>
      <div className={s.voteAverage}>{e.vote_average}</div>
    </NavLink>
  ));
};

export default CatalogCinemas;
