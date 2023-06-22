import React from "react";
import styles from "./AppHeader.module.scss";

const AppHeader = () => {
  return <h1 className={styles.appHeader} data-testid='app-header'>TO DO</h1>;
};

export default AppHeader;
