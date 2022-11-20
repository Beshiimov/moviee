import s from "./Pagination.module.css";

const Pagination = (props) => {
  return (
    <div className={s.pageNav}>
      {props.page === 1 ? (
        ""
      ) : (
        <button className={s.pagination} onClick={props.prevPage}>
          Предыдущая страница
        </button>
      )}

      <span className={s.pages}>{props.page}</span>

      {props.page === props.totalPage ? (
        ""
      ) : (
        <button className={s.pagination} onClick={props.nextPage}>
          Следующая страница
        </button>
      )}
    </div>
  );
};

export default Pagination;
