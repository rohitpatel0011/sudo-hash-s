import React from "react";
import styles from "./menuPosts.module.css";
import Link from "next/link";
import Image from "next/image";
const menuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
   
      <Link className={styles.item} href="">
        {(withImage && <div className={styles.imageContainer}>
          <Image
            src="/pexels-photo-261857.jpeg"
            alt=""
            fill
            className={styles.image}
          />
        </div>)}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            fashion
          </span>
          <p className={styles.postTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur cum amet, i
          </p>
          <div className={styles.detail}>
            <span className={styles.username}>Rohit Patel</span>
            <span className={styles.date}>-09.10.2023</span>
          </div>
        </div>
      </Link>
      <Link className={styles.item} href="">
       {(withImage &&  <div className={styles.imageContainer}>
          <Image
            src="/pexels-photo-261857.jpeg"
            alt=""
            fill
            className={styles.image}
          />
        </div>)}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            culture
          </span>
          <p className={styles.postTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur cum amet,
          </p>
          <div className={styles.detail}>
            <span className={styles.username}>Rohit Patel</span>
            <span className={styles.date}>-09.10.2023</span>
          </div>
        </div>
      </Link>
      <Link className={styles.item} href="">
       {(withImage &&  <div className={styles.imageContainer}>
          <Image
            src="/pexels-photo-261857.jpeg"
            alt=""
            fill
            className={styles.image}
          />
        </div>)}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.coding}`}>coding</span>
          <p className={styles.postTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur cum amet, inventore veniam neque sapiente! lorem50
          </p>
          <div className={styles.detail}>
            <span className={styles.username}>shivam singh</span>
            <span className={styles.date}>-09.10.2023</span>
          </div>
        </div>
      </Link>
      <Link className={styles.item} href="">
       {(withImage &&  <div className={styles.imageContainer}>
          <Image
            src="/pexels-photo-261857.jpeg"
            alt=""
            fill
            className={styles.image}
          />
        </div>)}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>travel</span>
          <p className={styles.postTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur cum amet, inventore veniam neque sapiente! lorem50
          </p>
          <div className={styles.detail}>
            <span className={styles.username}>Rohit Patel</span>
            <span className={styles.date}>-09.10.2023</span>
          </div>
        </div>
      </Link>
       <Link className={styles.item} href="">
       {(withImage &&  <div className={styles.imageContainer}>
          <Image
            src="/pexels-photo-261857.jpeg"
            alt=""
            fill
            className={styles.image}
          />
        </div>)}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>foods</span>
          <p className={styles.postTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur cum amet, inventore veniam neque sapiente! lorem50
          </p>
          <div className={styles.detail}>
            <span className={styles.username}>Rohit Patel</span>
            <span className={styles.date}>-09.10.2023</span>
          </div>
        </div>
      </Link>
      <Link className={styles.item} href="">
       {(withImage &&  <div className={styles.imageContainer}>
          <Image
            src="/pexels-photo-261857.jpeg"
            alt=""
            fill
            className={styles.image}
          />
        </div>)}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.style}`}>style</span>
          <p className={styles.postTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur cum amet, inventore veniam neque sapiente! lorem50
          </p>
          <div className={styles.detail}>
            <span className={styles.username}>Rohit Patel</span>
            <span className={styles.date}>-09.10.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default menuPosts;
