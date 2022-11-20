import React from "react";
import s from "./About.module.css";

class AboutCompanies extends React.Component {
  render() {
    return (
      <div className={s.aboutCompanies}>
        <div className={s.companyTitle}>Компании: </div>
        <div className={`${s.aboutCompanyRow} container`}>
          {this.props.production_companies.map((e) => (
            <div className={s.company} key={e.id}>
              {e.logo_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original/${e.logo_path}`}
                ></img>
              ) : (
                <div className={s.companyName}>{e.name}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AboutCompanies;
