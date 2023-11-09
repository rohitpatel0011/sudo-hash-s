import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>
          Welcome to <span className={styles.highLightTxt}>SudoHash's</span>{" "}
        </b>{" "}
        comes together to learn, share, and chat about all your things
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src="/Removebackgroundproject.png"
            alt=""
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            You can connect with Individuals in the Your field, engage in
            private discussions, and Chat with them!
          </h1>
          <p className={styles.postDesc}>
            Are you a tech enthusiast, a student eager to learn, or an
            experienced professional looking to share your knowledge? You've
            come to the right place. Our website is your go-to destination for
            all things tech.
          </p>
          <button className={styles.button}>read more !</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
