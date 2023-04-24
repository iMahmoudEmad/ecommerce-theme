import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<String>("");

  const handleMenuClick = (menuItem: string) => setActiveMenuItem(menuItem);

  return (
    <nav className={`${inter.className} ${styles.navbar}`}>
      <h1 className={styles.navbar__logo}>Logo</h1>

      <input
        className={styles.navbar__search}
        type="text"
        placeholder="what you're looking for...?"
        inputMode="search"
        id="navbar-search"
      />

      <ul className={styles.navbar__menu}>
        <li
          className={`${styles.navbar__menu__item} ${
            activeMenuItem === "Home" ? styles.active : ""
          }`}
          onClick={() => handleMenuClick("Home")}
        >
          <a href="#" className={styles.navbar__menu__item__link}>
            Home
          </a>
        </li>
        <li
          className={`${styles.navbar__menu__item} ${
            activeMenuItem === "About" ? styles.active : ""
          }`}
          onClick={() => handleMenuClick("About")}
        >
          <a href="#" className={styles.navbar__menu__item__link}>
            About
          </a>
        </li>
        <li
          className={`${styles.navbar__menu__item} ${
            activeMenuItem === "Contact" ? styles.active : ""
          }`}
          onClick={() => handleMenuClick("Contact")}
        >
          <a href="#" className={styles.navbar__menu__item__link}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
