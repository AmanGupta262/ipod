import React, { useEffect, useRef } from "react";
import ZingTouch from "zingtouch";

import "./menu.component.css";

const Menu = ({ onMenuClick, onCenterClick }) => {
  const ref = useRef();

  useEffect(() => {
    const zt = new ZingTouch.Region(document.body);
    zt.bind(
      ref.current,
      "rotate",
      (e) => {
        console.log(e.detail.distanceFromLast);
      },
      false
    );
  }, []);

  return (
    <>
      <div className="menu-container" ref={ref}>
        <div className="button-container">
          <button className="menu-btn btn" onClick={onMenuClick}></button>
          <button
            className="menu-center-btn btn"
            onClick={onCenterClick}
          ></button>
        </div>
      </div>
      <div className="screen"></div>
    </>
  );
};

export default Menu;
