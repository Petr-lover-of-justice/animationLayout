import React from "react";
import s from "./BodyImg.module.scss";
import title from "..//../img/title.png";
import India from "..//../img/India.png";
import Britain from "..//../img/Britain.png";
import itali from "..//../img/Itali.png";
export const BodyImg = () => {
  return (
    <div className={s.root}>
      <div className={s.border}></div>
      <div className={s.india}></div>
      <div className={s.titleImg}>
        <div className={s.border}></div>
        <div className={s.count}>
        <div className={s.india0}>
            <img src={India} alt="India" />
          </div>
          <div className={s.india1}>
            <img src={India} alt="India" />
          </div>
          <div className={s.india2}>
            <img src={India} alt="India" />
          </div>
          <div className={s.britain}>
            <img src={Britain} alt="britain" />
          </div>
          <div className={s.itali}>
            <img src={itali} alt="britain" />
          </div>
        </div>
        <img src={title} alt="title" />
        <div className={s.circleBackground}></div>
      </div>

      <div className={s.exzempel}></div>
    </div>
  );
};
