import React from "react";
import s from "../GeneralComponents/Main.module.css";
import { Skeleton } from "../GeneralComponents/Skeleton/Skeleton";
import CatalogCinemas from "../GeneralComponents/CatalogCinema/CatalogCinemas";
import Pagination from "../GeneralComponents/Pagination/Pagination";
import homePageRequest from "../../requests/homePageRequest";

class HomePage extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.adult !== prevProps.adult) {
      this.request(this.props.page);
    }
  }

  request = (page) => {
    homePageRequest(this.props.adult, page).then((data) => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      this.props.updateData(data);
    });
  };

  componentDidMount = () => {
    this.request(this.props.page);
  };

  nextPage = () => {
    this.request(this.props.page + 1);
  };

  prevPage = () => {
    this.request(this.props.page - 1);
  };

  render = () => {
    return (
      <div className={s.Page}>
        <div className={s.cinemas}>
          {this.props.loading ? (
            <Skeleton className={s.loading} />
          ) : (
            <CatalogCinemas data={this.props.data} />
          )}
        </div>

        {this.props.totalPages ? (
          <Pagination
            prevPage={this.prevPage}
            nextPage={this.nextPage}
            page={this.props.page}
            totalPage={this.props.totalPages}
          />
        ) : (
          <div className={s.wrongWay}>Подождите пожалуйста</div>
        )}
      </div>
    );
  };
}

export default HomePage;
