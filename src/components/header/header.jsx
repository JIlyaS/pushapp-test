import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import styles from "./styles.module.scss";
import Filters from "../filters/filters";

const Header = () => {
  return (
      <Tabs className={styles.tabs}>
        <header className={styles.header}>
          <TabList className={styles.tabs__list}>
            <Tab className={styles.tabs__item} selectedClassName={styles.tabs__itemSelected}>Игры</Tab>
            <Tab className={styles.tabs__item} selectedClassName={styles.tabs__itemSelected}>Тинькофф</Tab>
          </TabList>
          <div className={styles.header__filterBlock}>
            <Filters />
          </div>
        </header>

        <TabPanel className={styles.tabs__content}>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel className={styles.tabs__content}>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
  );
}

export default Header;
