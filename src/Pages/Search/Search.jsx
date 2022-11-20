import React from "react";
import s from "../GeneralComponents/Main.module.css";
import CatalogCinemas from "../GeneralComponents/CatalogCinema/CatalogCinemas";
import Pagination from "../GeneralComponents/Pagination/Pagination";
import searchRequest from "../../requests/searchRequest";

class Search extends React.Component {
  nextPage = () => {
    searchRequest(
      this.props.searchText,
      this.props.adult,
      this.props.page + 1
    ).then((data) => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      this.props.updateData(data);
    });
  };

  prevPage = () => {
    searchRequest(
      this.props.searchText,
      this.props.adult,
      this.props.page - 1
    ).then((data) => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      this.props.updateData(data);
    });
  };

  render() {
    return (
      <div className={s.Page}>
        {this.props.totalResults > 0 ? (
          <div className={s.results}>
            Результатов: {this.props.totalResults}
          </div>
        ) : null}
        <div className={s.cinemas}>
          {this.props.data.length === 0 ? (
            ""
          ) : (
            <CatalogCinemas data={this.props.data} />
          )}
        </div>

        {this.props.totalResults === 0 ? (
          <div className={s.wrongWay}>Введите название фильма</div>
        ) : (
          <Pagination
            prevPage={this.prevPage}
            nextPage={this.nextPage}
            page={this.props.page}
            totalPage={this.props.totalPages}
          />
        )}
      </div>
    );
  }
}

export default Search;
