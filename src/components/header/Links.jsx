"use client";

import React, { useState } from "react";
import NavLink from "./navLink/NavLink";
import styles from "./Links.module.css";
import { HiMiniBars3 } from "react-icons/hi2";
import Navigations from "./navigations/Navigations";

const Links = () => {
  const [close, setClose] = useState(false);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.headerMenuItems}>
          <Navigations flex="row" />
        </div>
        <div
          className={styles.responsiveIcon}
          onClick={() => setClose((prev) => !prev)}
        >
          <HiMiniBars3 />
        </div>
      </div>

      {close && (
        <div className={styles.responsiveMenu}>
        <h1>Apple</h1>
          <Navigations flex="column" />
        </div>
      )}
    </div>
  );
};

export default Links;
