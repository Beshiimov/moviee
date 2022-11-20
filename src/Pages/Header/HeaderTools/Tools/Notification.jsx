import s from "../HeaderTools.module.css";
import notification from "../../../../assets/icons/notfication.svg";

const Notification = (props) => {
  return (
    <>
      <button
        className={s.notification}
        onClick={props.isOpen ? props.toDefaultState : props.notificationOpen}
      >
        <img src={notification} alt="Настройки" />

        {props.notification <= 99 ? (
          <span className={s.notificationCount}>{props.notification}</span>
        ) : (
          <span className={s.notificationCount}>99+</span>
        )}
      </button>

      {props.isOpen && (
        <div className={s.modal}>
          <p>У вас нет новых уведомлений</p>
        </div>
      )}
    </>
  );
};
export default Notification;
