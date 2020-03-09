import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const TabBarItem = (props) => {
  const {children, label, activeTab, ...attrs} = props;
  const classes = cn(
    styles.tabBarItem,
    {active: activeTab === label}
  );  
  return (
    <div className={classes} {...attrs}>
      {children}
    </div>
  );
};

TabBarItem.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
  activeTab: PropTypes.string
}

TabBarItem.defaultProps = {
  activeTab: ``,
  children: null,
}

export default TabBarItem;
