import React from "react";
import s from "./Cinema.module.css";
import Hero from "./Hero/Hero";
import About from "./About/About";
import cinemaRequest from "../../requests/cinemaRequest";

class Cinema extends React.Component {
  componentDidMount = () => {
    cinemaRequest(this.props.params.id).then((response) => {
      this.props.loadData(response.data);
    });
  };

  componentWillUnmount = () => {
    this.props.clearState();
  };

  render = () => {
    return (
      <>
        {this.props.isLoad ? (
          <h1>loading</h1>
        ) : (
          <div className={s.cinema}>
            <Hero
              state={this.props.data}
              // watchList={this.watchList}
            />
            <About state={this.props.data} />
          </div>
        )}
      </>
    );
  };
}

export default Cinema;
