"use client";
import React from "react";
import NavLink from "../navLink/NavLink";
import styles from "./navigations.module.css";
const allLinks = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/blog", title: "Blog" },
  { path: "/contact", title: "Contact" },
];
const session = true;
const isActive = true;
const Navigations = ({ flex }) => {
  return (
    <header className={flex === "column" ? styles.headerColumn : styles.headerRow}>
      {allLinks.map((item, index) => {
        return <NavLink item={item} key={index} />;
      })}
      {session ? (
        <>
          {isActive && <NavLink item={{ path: "/admin", title: "Admin" }} />}
          <button className={styles.logOut}>Logout</button>
        </>
      ) : (
        <NavLink item={{ path: "/login", title: "Login" }} />
      )}
    </header>
  );
};

export default Navigations;
