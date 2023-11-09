"use client";
import React from "react";
import styles from "./login.module.css";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loading}></div>
        <p>Loading...!</p>
      </div>
    );
  }

  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <section className={styles.wrapper}>
          <div className={styles.heading}>
            <h1 className={`${styles.text}  ${styles.textlarge}`}>Sign In</h1>
            <p className={`${styles.text}  ${styles.textnormal}`}>
              {" "}
              New User{" "}
              <span>
                <Link
                  href="#"
                  className={`${styles.text}  ${styles.textlinks}`}
                />
                Create an account
              </span>
            </p>
          </div>
          <form name="login" className={styles.form}>
            <div className={styles.inputcontrol}>
              <label htmlFor="emailInput" class="input-label" hidden>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                className={styles.inputfield}
                placeholder="Email Address"
              />
            </div>
            <div className={styles.inputcontrol}>
              <label htmlFor="password" class="input-label" hidden>
                Password
              </label>
              <input
                type="password"
                name="password"
                className={styles.inputfield}
                placeholder="Password"
              />
            </div>
            <div className={styles.inputcontrol}>
              <a href="#" className={`${styles.text}  ${styles.textlinks}`}>
                Forgot Password
              </a>
              <input
                type="button"
                name="submit"
                className={styles.inputsubmit}
                value="Login"
                disabled
              />
            </div>
          </form>
          <div className={styles.striped}>
            <span className={styles.stripedline}></span>
            <span className={styles.stripedtext}>Or</span>
            <span className={styles.stripedline}></span>
          </div>
          <div className={styles.method}>
            <div
              className={styles.methodcontrol}
              onClick={() => signIn("google")}>
              <Link href="#" className={styles.methodaction}>
                <ion-icon name="logo-google"></ion-icon>
              </Link>
              <span>Sign in with Google</span>
            </div>
            <div className={styles.methodcontrol}>
              <Link href="#" className={styles.methodaction}>
                <ion-icon name="logo-linkedin"></ion-icon>
              </Link>
              <span>Sign in with Linkedin</span>
            </div>
            <div className={styles.methodcontrol}>
              <Link href="#" className={styles.methodaction}>
                <ion-icon name="logo-github"></ion-icon>
              </Link>

              <span>Sign in with Github</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoginPage;
