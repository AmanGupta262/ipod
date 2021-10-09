import React from "react";

import "./list.component.css";
import nature from "../../assets/img/nature.jpg";
// import ludo from "../../assets/img/ludo.jpg";
import game from "../../assets/img/game.jpg";
import settings from "../../assets/img/settings.svg";
import music from "../../assets/img/music.jpg";

const List = ({ active, show = "menu", menu }) => {
  return (
    <>
      {show === "menu" && (
        <>
          <div className="image full">
            <img src={nature} className="full" alt="" />
          </div>
          <div className="list-container">
            <div className="list-heading">iPod.js</div>

            <div className="list-menu">
              {menu.map((m, i) => (
                <div
                  key={`${m}-${i}`}
                  className={`list-menu-item ${i === active ? "active" : ""}`}
                >
                  {m}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {show === "cover flow" && (
        <div className="d-flex heading full">
          <div className="image full">
            <img src={nature} className="full" alt="" />
          </div>
        </div>
      )}
      {show === "music" && (
        <div className="d-flex heading full">
          <div className="image full">
            <img src={music} className="full" alt="" />
          </div>
        </div>
      )}
      {show === "settings" && (
        <div className="d-flex heading full">
          <div className="image full">
            <img src={settings} className="full" alt="" />
          </div>
        </div>
      )}
      {show === "games" && (
        <div className="d-flex heading full">
          <div className="image full">
            <img src={game} className="full" alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default List;
