import React from "react";
import { Search } from "../Search";

import s from "./Body.module.scss";



import Ellipse1 from "..//../img/Ellipse1.png"
import Ellipse2 from "..//../img/Ellipse2.png"
import Ellipse3 from "..//../img/Ellipse3.png"
import { BodyImg } from "../BodyImg";
import { SubTitle } from "../SubTitle";
export const Body = () => {
  return (
    <div className={s.root}>
      <div className={s.wrapperInside}>
        <h1 className={s.topUp}>
          Now Buy Your <br /> PIN or <span> Top Up </span>{" "}
        </h1>
        <h1 className={s.bankTransfer}>With Bank Transfer</h1>
        <div className={s.subTitle}>
          <SubTitle />
        </div>
        <button>Get Started</button>
        <Search />
        <div className={s.regularUser}>
          <div className={s.ellipse}>
            <img src={Ellipse1} alt="Ellipse" className={s.Ellipse1}/>
            <img src={Ellipse2} alt="Ellipse" className={s.Ellipse2}/>
            <img src={Ellipse3} alt="Ellipse" className={s.Ellipse3}/>
            <div className={s.Ellipse4}><span></span></div>
          </div>
          <div className={s.text}>
          <p>45k+ Regular User.<span> View Price Plan</span></p> 
          </div>
        
        </div>
      </div>
      <BodyImg />
    </div>
  );
};
