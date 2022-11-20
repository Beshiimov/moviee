import s from "./About.module.css";
import { NavLink } from "react-router-dom";
import AboutCompanies from "./AboutCompanies";
import { useEffect } from "react";

const About = (props) => {
  const notZero = (number) => {
    if (number > 0) {
      return number;
    }
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });  
  })


  const state = props.state;
  return (
    <div className={s.about}>
      <div className={`${s.aboutRow} container`}>
        <div className={s.title}>О фильме</div>
        <div className={s.row}>
          <div className={s.aboutTitle}>Популярность: </div>
          <div className={s.value}>{state.popularity}</div>
        </div>
        <div className={s.row}>
          <div className={s.aboutTitle}>Бюджет: </div>
          <div className={s.value}>{notZero(state.budget)}</div>
        </div>
        <div className={s.row}>
          <div className={s.aboutTitle}>Релиз: </div>
          <div className={s.value}>{state.release_date}</div>
        </div>
        <div className={s.row}>
          <div className={s.aboutTitle}>Жанры: </div>
          <div className={s.value}>
            {state.genres.map((e) => (
              <NavLink key={e.id} to={e.id} className={s.a}>
                {e.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {state.production_companies.length !== 0 && (
        <AboutCompanies
          production_companies={props.state.production_companies}
        />
      )}
    </div>
  );
};

export default About;
