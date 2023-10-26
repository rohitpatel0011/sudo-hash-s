import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import Link from "next/link";
import Comments from "@/components/comments/Comments";
function SinglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur o
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>

            <div className={styles.userTextContainer}>
              <span className={styles.username}>Rohit Patel</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.descriptions}>
            {/* <p className={styles.textContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              debitis nam tempore ut enim, illo assumenda dignissimos autem
              asperiores itaque! Quaerat tempora voluptatum suscipit ab culpa,
              quis quam sunt odit!
            </p>
            <h2  className={styles.h2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, rem.
            </h2 >
            <p className={styles.textContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              debitis nam tempore ut enim, illo assumenda dignissimos autem
              asperiores itaque! Quaerat tempora voluptatum suscipit ab culpa,
              quis quam sunt odit!
            </p>
            <p className={styles.textContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              debitis nam tempore ut enim, illo assumenda dignissimos autem
              asperiores itaque! Quaerat tempora voluptatum suscipit ab culpa,
              quis quam sunt odit!
            </p> */}

            <article>
              <h2 className={styles.h2}>Basic block level elements</h2>
              <p className={styles.textContent}>
                This is a normal paragraph (<code>p</code> element). To add some
                length to it, let us mention that this page was primarily
                written for testing the effect of{" "}
                <strong>user style sheets</strong>. You can use it for various
                other purposes as well, like just checking how your browser
                displays various HTML elements by default. It can also be useful
                when testing conversions from HTML format to other formats,
                since some elements can go wrong then.
              </p>
              <p className={styles.textContent}>
                This is another paragraph. I think it needs to be added that the
                set of elements tested is not exhaustive in any sense. I have
                selected those elements for which it can make sense to write
                user style sheet rules, in my opionion.
              </p>
              <div>
                This is a <code>div</code> element. Authors may use such
                elements instead of paragraph markup for various reasons. (End
                of <code>div</code>.)
              </div>
              <blockquote>
                <p className={styles.textContent}>
                  This is a block quotation containing a single paragraph. Well,
                  not quite, since this is not <em>really</em> quoted text, but
                  I hope you understand the point. After all, this page does not
                  use HTML markup very normally anyway.
                </p>
              </blockquote>
              <p className={styles.textContent}>
                The following contains address information about the author, in
                an <code>address</code> element.
              </p>
              <address>
                3 Rue Jules Ferry, Neuilly Sur Seine, France 94000
              </address>
            </article>
            <article>
              <h2 className={styles.h2}>Lists</h2>
              <p className={styles.textContent}>
                This is a paragraph before an <strong>unnumbered</strong> list (
                <code>ul</code>). Note that the spacing between a paragraph and
                a list before or after that is hard to tune in a user style
                sheet. You can't guess which paragraphs are logically related to
                a list, e.g. as a "list header".
              </p>
              <ul>
                <li> One.</li>
                <li> Two.</li>
                <li>
                  {" "}
                  Three. Well, probably this list item should be longer. Note
                  that for short items lists look better if they are compactly
                  presented, whereas for long items, it would be better to have
                  more vertical spacing between items.
                </li>
                <li>
                  {" "}
                  Four. This is the last item in this list. Let us terminate the
                  list now without making any more fuss about it.
                </li>
              </ul>
              <p className={styles.textContent}>
                The following is a <code>menu</code> list:
              </p>
              <menu>
                <li> One.</li>
                <li> Two.</li>
                <li>
                  {" "}
                  Three. Well, probably this list item should be longer so that
                  it will probably wrap to the next line in rendering.
                </li>
              </menu>
              <p className={styles.textContent}> 
                The following is a <code>dir</code> list:
              </p >
              <dir>
                <li> One.</li>
                <li> Two.</li>
                <li>
                  {" "}
                  Three. Well, probably this list item should be longer so that
                  it will probably wrap to the next line in rendering.
                </li>
              </dir>
              <p  className={styles.textContent}>
                This is a paragraph before a <strong>numbered</strong> list (
                <code>ol</code>). Note that the spacing between a paragraph and
                a list before or after that is hard to tune in a user style
                sheet. You can't guess which paragraphs are logically related to
                a list, e.g. as a "list header".
              </p>
              <ol>
                <li> One.</li>
                <li> Two.</li>
                <li>
                  {" "}
                  Three. Well, probably this list item should be longer. Note
                  that if items are short, lists look better if they are
                  compactly presented, whereas for long items, it would be
                  better to have more vertical spacing between items.
                </li>
                <li>
                  {" "}
                  Four. This is the last item in this list. Let us terminate the
                  list now without making any more fuss about it.
                </li>
              </ol>
              <p className={styles.textContent}>
                This is a paragraph before a <strong>definition</strong> list (
                <code>dl</code>). In principle, such a list should consist of{" "}
                <em>terms</em> and associated definitions. But many authors use{" "}
                <code>dl</code> elements for fancy "layout" things. Usually the
                effect is not <em>too</em> bad, if you design user style sheet
                rules for <code>dl</code> which are suitable for real definition
                lists.
              </p>
              <dl>
                <dt> recursion</dt>
                <dd> see recursion</dd>
                <dt> recursion, indirect</dt>
                <dd> see indirect recursion</dd>
                <dt> indirect recursion</dt>
                <dd> see recursion, indirect</dd>
                <dt> term</dt>
                <dd>
                  {" "}
                  a word or other expression taken into specific use in a
                  well-defined meaning, which is often defined rather
                  rigorously, even formally, and may differ quite a lot from an
                  everyday meaning
                </dd>
              </dl>
            </article>
          </div>
          <Comments/>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default SinglePage;
