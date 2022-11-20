import s from "./Hero.module.css";
// import {ReactComponent as WatchList} from "../../../assets/icons/watchlist.svg";

const Hero = (props) => {
  const state = props.state;

  return (
    <>
      <div className={s.hero}>
        <div className={`${s.row} container`}>
          <div>
            <img
              className={s.poster}
              src={`https://image.tmdb.org/t/p/w500/${state.poster_path}`}
              alt="Обложка Фильма"
            />
          </div>

          <div>
            <div className={s.title}>
              {state.title}
              <button className={s.watchList} onClick={props.watchList}>
                {/*<WatchList />*/}
              </button>
            </div>
            <div className={s.originalTitle}>{state.original_title}</div>
            {state.adult && <span className={s.adult}>18+</span>}
            <div className={s.tagline}>{state.tagline}</div>
            <div className={s.overview}>{state.overview}</div>
          </div>
        </div>

        <img
          className={s.backdropPath}
          src={`https://image.tmdb.org/t/p/original/${state.backdrop_path}`}
          alt="Обложка"
        />
        <div className={s.gradient} />
      </div>
    </>
  );
};

export default Hero;
