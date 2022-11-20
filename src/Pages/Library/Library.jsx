import React, { PureComponent } from "react";
import s from "../GeneralComponents/Main.module.css";
import CatalogCinemas from "../GeneralComponents/CatalogCinema/CatalogCinemas";
import Pagination from "../GeneralComponents/Pagination/Pagination";

class Library extends PureComponent {
  render() {
    return (
      <div>
        {/*<div className={s.Page}>*/}
        {/*  <div className={s.cinemas}>*/}
        {/*    <CatalogCinemas data={this.props.visitedCinemas} />*/}
        {/*  </div>*/}

        {/*  {this.props.visitedCinemas &&*/}
        {/*    <div className={s.wrongWay}>Вы пока не посещали ни одного фильма</div>*/}
        {/*  }*/}
        {/*</div>*/}
      </div>
    );
  }
}

Library.propTypes = {};

export default Library;
