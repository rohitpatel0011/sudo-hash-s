"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";
import "react-quill/dist/quill.bubble.css";
import styles from "./write.module.css";
import ReactQuill from "react-quill";

const WritePage = () => {
  const { status } = useSession();
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("Add Title");
  const [catSlug, setCatSlug] = useState("");

  const router = useRouter();

  if (status === "loading") {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loading}></div>
        <strong> Please wait....!</strong>
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder={title}
        className={styles.input}
        onChange={e => setTitle(e.target.value)}
      />
      <label className={styles.selectCat}>Select Category</label>
      <select
        className={styles.select}
        onChange={e => setCatSlug(e.target.value)}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <i class="ion-plus-circled"></i>
        </button>
        {open && (
          <div className={styles.add}>
            <input type="file" id="image" style={{ display: "none" }} />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <i class="ion-image"></i>
              </label>
            </button>
            <button className={styles.addButton}>
              <i class="ion-document-text"></i>
            </button>
            <button className={styles.addButton}>
              <i class="ion-ios-videocam"></i>
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;
