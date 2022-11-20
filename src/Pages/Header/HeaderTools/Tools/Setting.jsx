import React from "react";
import s from "../HeaderTools.module.css";
import setting from "../../../../assets/icons/settings.svg";

const Notification = (props) => {
  const adultContentBtn = () => {
    props.adultContent === false
      ? props.adultContentToggle(true)
      : props.adultContentToggle(false);
  };

  return (
    <>
      <button
        className={s.notification}
        onClick={props.isOpen ? props.toDefaultState : props.settingsOpen}
      >
        <img src={setting} alt="Настройки" />
      </button>

      {props.isOpen && (
        <div className={s.modal}>
          <div className={s.item}>
            <label>
              <div className={s.togglePillColor}>
                <input
                  type="checkbox"
                  className={s.rect2}
                  onChange={adultContentBtn}
                  checked={!!props.adultContent}
                />
                <div className={s.cbx} />
                <span className={s.value}>Контент для Взрослых</span>
              </div>
            </label>
          </div>
        </div>
      )}
    </>
  );
};
export default Notification;
