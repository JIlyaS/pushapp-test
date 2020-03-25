import React from "react";
import Header from "../header/header";

import "../../scss/main.scss";
import styles from "./styles.module.scss";

const App = () => {

  return (
    <div className={styles.app}>
      <Header />
    </div>
  )
}

export default App;

