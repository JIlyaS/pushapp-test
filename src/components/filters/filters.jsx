import React from "react";

import styles from "./styles.module.scss";

const Filters = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.filters__platform}>
        <h2 className={styles.filters__title}>Фильтр</h2>
        <ul className={styles.filters__list}>
          <li className={styles.filters__item}>
            <button className="btn btn--active" type="button">
              Все
            </button>
          </li>
          <li className={styles.filters__item}>
            <button className="btn" type="button">
              <span className="visually-hidden">Apple</span>
            </button>
          </li>
          <li className={styles.filters__item}>
            <button className="btn" type="button">
              <span className="visually-hidden">Android</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Filters;
