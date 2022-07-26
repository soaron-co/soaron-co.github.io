/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';
import styles from '../styles/work.module.css';
import Down from '../container/Down.js';
import Link from 'next/link';

function Worklog() {
  return (
    <div className="c">
      <Head>
        <title>PAT-Work with empathy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/blacklogo.png" />
      </Head>
      <div className={styles.box}>
        <div className={styles.box_1}>
          <div className={styles.navbar}>
            <div className={styles.nav_content}>
              <Link href="/Dashboard">
                <div className={styles.nonactive}>Dashboard</div>
              </Link>
              <div className={styles.active}>Work Log</div>
              <Link href="/Timesheet">
                <div className={styles.nonactive}>Timesheet</div>
              </Link>
            </div>
          </div>
          <div className={styles.othercontent}>
            <div className={styles.imagecontainer}>
              <img src="worklog.svg" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.box_2}>
          <div className={styles.content}>
            <div className={styles.work_content}>
              <div className={styles.button_content}>
                <img src="check.png" alt="" />
                <div className="challenge">Challenge</div>
              </div>
              <div className={styles.userinput}>
                <input className={styles.userin} type="text" placeholder="" />

                <input
                  className={styles.usertext}
                  type="text"
                  value="DMFDP130322 "
                />
                <div className={styles.down}>
                  <Down />
                </div>
              </div>
            </div>
            <div className={styles.work_content}>
              <div className={styles.button_content}>
                <img src="list.png" alt="" />
                <div>Plan</div>
              </div>

              <div className={styles.userinput}>
                <input className={styles.userin} type="text" placeholder="" />
                <input
                  className={styles.usertext}
                  type="text"
                  value="work portal Frontend Development of PAT (Formerly Portal) by Devender"
                />
              </div>
            </div>
            <div className={styles.work_content}>
              <div className={styles.button_content}>
                <img src="location.png" alt="" />
                <div>Working</div>
              </div>
              <div className={styles.userinput}>
                <input className={styles.userin} type="text" placeholder="" />
                <div className={styles.radio}>
                  <div className={styles.radio_1}>
                    <input type="radio" name="options" />
                    <div className={styles.r}>Remotely</div>
                  </div>
                  <div className={styles.radio_1}>
                    <input type="radio" name="options" />
                    <div className={styles.o}>Office</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.work_content}>
              <div className={styles.button_content}>
                <img src="date.png" alt="" />
                <div>Date</div>
              </div>

              <div className={styles.userinput}>
                <input className={styles.userin} type="text" placeholder="" />
                <input
                  className={styles.usertext}
                  type="text"
                  value="23. 05. 2022"
                />
                {/* <div className={styles.down}>
                  <Down />
                </div> */}
              </div>
            </div>
            <div className={styles.work_content}>
              <div className={styles.button_content}>
                <img src="outline.png" alt="" />
                <div>Time</div>
              </div>

              <div className={styles.userinput}>
                <input className={styles.userin} type="text" placeholder="" />
                <input className={styles.usertext} type="text" value="1 hr" />
                {/* <div className={styles.down}>
                  <Down />
                </div> */}
              </div>
            </div>
            <div className={styles.work_content}>
              <div className={styles.button_content}>
                <img src="link.png" alt="" />
                <div>Link</div>
              </div>
              <div className={styles.userinput}>
                <input className={styles.userin} type="text" placeholder="" />
                <input
                  className={styles.usertext}
                  type="text"
                  value="https://docs.google.com/document/d/1-yH8VskyInNxXpx-tKUSlZojgv2DQc9cDl72vY-dEJY/edit"
                />
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.submit}>Submit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Worklog;
