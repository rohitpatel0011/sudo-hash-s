"use client";

import React, { useContext } from "react";
import Image from "next/image";
import styles from "./themeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";
const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}
    style={
      theme == "dark"
        ? { background: "white" }
        : {  background: "#0f172a" }
    }

    >
      <Image src="/moon.png" width={14} height={14} alt="dark" />

      <div
        className={styles.ball}
        style={
          theme == "dark"
            ? { left: "20px", background: "#0f172a" ,border:" 1px white solid"}
            : { right: 0, background: "#fff" }
        }
      ></div>
      <Image src="/sun.png" width={14} height={14} alt="light" />
    </div>
  );
};

export default ThemeToggle;
