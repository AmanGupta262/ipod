import React, { useEffect, useMemo, useRef, useState } from "react";
import ZingTouch from "zingtouch";
import { List } from "..";

import "./menu.component.css";

const Menu = () => {
  const menu = useMemo(() => ["Cover flow", "Music", "Games", "Settings"], []);

  const ref = useRef();
  const [active, setActive] = useState(-1);
  const [show, setShow] = useState("menu");

  const onCenterClick = () => setShow(menu[active].toLowerCase());
  const onMenuClick = () => setShow("menu");

  useEffect(() => {
    const zt = new ZingTouch.Region(document.body);
    zt.bind(
      ref.current,
      "rotate",
      (e) => {
        const deg = Math.abs(Math.floor(e.detail.angle));
        if (deg > 0 && deg < 70) setActive(0);
        else if (deg > 70 && deg < 170) setActive(1);
        else if (deg > 170 && deg < 260) setActive(2);
        else if (deg > 260 && deg < 360) setActive(3);
      },
      false
    );
  }, []);

  return (
    <>
      <div className="screen">
        <List active={active} show={show} menu={menu} />
      </div>
      <div className="menu-container" ref={ref}>
        <div className="button-container">
          <button className="menu-btn btn" onClick={onMenuClick}></button>
          <button
            className="menu-center-btn btn"
            onClick={onCenterClick}
          ></button>
        </div>
      </div>
    </>
  );
};

export default Menu;
