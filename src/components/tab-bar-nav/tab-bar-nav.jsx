import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const TabBarNav = (props) => {
  const {navLabel, className, onChangeActiveTab} = props;
  const classes = cn(
    styles.TabBarNav,
    className
  );  
  return (
    <div
      className={classes}
      onClick={() => { onChangeActiveTab(navLabel) }}>
      {navLabel}
    </div>
  );
};

TabBarNav.propTypes = {
  navLabel: PropTypes.string,
  className: PropTypes.string,
  onChangeActiveTab: PropTypes.func
}

TabBarNav.defaultProps = {
  navLabel: ``,
  className: ``,
  onChangeActiveTab: () => {}
}

export default TabBarNav;
