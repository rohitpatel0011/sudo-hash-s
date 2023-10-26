import React from "react";
import styles from "./footer.module.css";

import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className="info">
    
          <div className={styles.logo}>
            <section className={styles.logoContainer}>
              <div className={styles.logo5}>
          
                <p className={styles.p}>superuser's</p>
              </div>
            </section>
          </div>
       
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe amet
          libero ullam ea optio dicta qui vel inventore? Nobis commodi
          voluptates necessitatibus, reprehenderit molestiae nam labore eligendi
          cupiditate nequ  
          repudiandae earum magni? Numquam, sunt!
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="facebook" width={18} height={18} />
          <Image src="/instagram.png" alt="instagram" width={18} height={18} />
          <Image src="/x-icon.png" alt="twitter" width={18} height={18} />
          <Image src="/youtube.png" alt="facebook" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links </span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags </span>
          <Link href="/">Style</Link>
          <Link href="/">fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
          <Link href="/">Culture</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Twitter</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
