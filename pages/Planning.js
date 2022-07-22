import React from 'react';
import Head from 'next/head';
import styles from '../styles/Planning.module.css';
import Down from '../container/Down.js';
import Link from 'next/link';
import Image from 'next/image';
import Work from './Work';

function planning() {
  return (
    <div className="c">
      <Head>
        <title>PAT-Work with eampthy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/blacklogo.png" />
      </Head>
      <div className={styles.box}>
        <div className={styles.navbar}>
          <div className={styles.navbarcontent}>
            <Link href="./Dashboard">
              <div className={styles.leftarrow}>
                <img src="left.png" alt="" />
              </div>
            </Link>
            <div className={styles.navtext}>Back to Dashboard</div>
          </div>
          <div className={styles.user_content}>
            <div className={styles.dev}>Devender</div>
            <div className={styles.image}>
              <img src="devender.jpg" alt="" />
            </div>
            <div className={styles.down}>
              <Down />
            </div>
          </div>
        </div>
        <div className={styles.owner}>
          <div className={styles.name}>Owner : Devender</div>
          <div className={styles.challenge}>
            <div>Challenge : DMFDP130322</div>
            <div>Start Date : 06-07-2022</div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.workbox}>
            <div className={styles.icon}>
              <img src="home.png" alt="" />
            </div>
            <div className={styles.contenttext}>Work</div>
          </div>

          <div className={styles.workbox2}>
            <div className={styles.icon}>
              <img src="description.png" alt="" />
            </div>
            <div className={styles.contenttext}>Description</div>
          </div>
          <div className={styles.workbox3}>
            <div className={styles.icon}>
              <img src="person.png" alt="" />
            </div>
            <div className={styles.contenttext}>Who does?</div>
          </div>
          <div className={styles.workbox4}>
            <div className={styles.icon}>
              <img src="clock.png" alt="" />
            </div>
            <div className={styles.contenttext}>Time</div>
          </div>
        </div>
        <Work />
        <Work />
        <Work />
        <Work />
        {/* return (<div>{row ? <Work /> : setRow(false)};</div>
        ); */}
        <div className={styles.rowbox}>
          <div className={styles.row}>+ add row</div>
        </div>
        <div className={styles.button}>
          <div className={styles.submit}>Submit Plan</div>
        </div>
      </div>
    </div>
  );
}
export default planning;
