import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => (
  <div className={styles.container}>
    <div className={styles.imageContainer}>
      <Image src="/book-address-book-learning-learn-159751.jpeg" alt="" fill />
    </div>
    <div className={styles.textContainer}>
      <div className={styles.detail}>
        <span className={styles.date}>11.11.2023</span>
        <span className={styles.date}>culture</span>
      </div>
      <Link href="/">
        <h1 className={styles.postHeading}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
        </h1>
      </Link>
      <p className={styles.postContext}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam natus
        mollitia eveniet rem adipisci porro recusandae quos asperiores provident
        molestias blanditiis quas voluptatum sint nostrum error libero vel,
        maiores dolorem fugiat doloremque quidem ut voluptate saepe! Dolor
        ratione fugit, animi consequatur aliquam inventore veritatis eius nobis,
        aspernatur quas blanditiis cumque nulla magnam pe
      </p>
      <Link href="/">
        <div className={styles.link}>
          <span className={styles.readBtn}>Read more</span>
          <div className={styles.arrow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={styles.svg}
            >
              <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  </div>
);

export default Card;
