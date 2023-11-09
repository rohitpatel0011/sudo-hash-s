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
              <p className={styles.p}>sudoHash's</p>
            </div>
          </section>
        </div>

        <p className={styles.desc}>
          Why Choose Us? User-Friendly Interface: Our website is designed with
          you in mind. It's easy to navigate and explore. You'll find what
          you're looking for without any hassle. Inclusive Community: We welcome
          all levels of expertise. Whether you're a newbie or a tech pro, you'll
          find value in our community. Engaging Content: Our articles are
          written to be both informative and accessible. We break down complex
          topics into simple, easy-to-understand language. Constant Learning:
          Technology is ever-evolving, and we're committed to keeping you
          up-to-date with the latest trends and skills. Join Us Today Don't miss
          out on the opportunity to connect with a vibrant tech community,
          expand your knowledge, and engage with exciting topics. Join us today
          and be a part of our tech journey. Get Started Now (Button to join or
          sign up) Feel free to customize this text to match the style and
          branding of your website.
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
