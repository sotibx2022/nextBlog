import React from "react";
import Links from "./Links";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className="logo">
        Next Blog
      </div>
     <Links/>
    </div>
  );
};

export default Header;
