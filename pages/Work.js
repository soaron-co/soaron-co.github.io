import React from 'react';
import Down from '../container/Down.js';
import Image from 'next/image';
import styles from '../styles/Dashboardwork.module.css';
export default function Work() {
  return (
    <>
      <div className={styles.rowbox_1}>
        <div className={styles.subrowbox_1}>
          <div className={styles.workbox_1}>
            <div className={styles.itemcontent}>whf</div>
            <div className={styles.down}>
              <Down />
            </div>
          </div>
          <div className={styles.workbox_2}>
            <input className={styles.usertext} type="text" value="strategy" />
          </div>
          <div className={styles.workbox_3}>
            <div className={styles.itemcontent}>Dev</div>
            <div className={styles.down}>
              <Down />
            </div>
          </div>
          <div className={styles.workbox_4}>
            <div className={styles.itemcontent}>4hrs</div>
            <div className={styles.down}>
              <Down />
            </div>
          </div>
        </div>
        <div className={styles.subrowbox_2}>
          <div className={styles.deleteicon}>
            <img src="delete.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
