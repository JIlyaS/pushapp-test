import React, {Component} from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import TabBarNav from "../tab-bar-nav/tab-bar-nav";
import styles from "./styles.module.scss";

class TabBar extends Component {
  
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };
  
  static defaultProps = {
    children: null,
    className: ``,
  };

  state = {
    activeTab: null,
  };

  componentDidMount() {
    const { children = [] } = this.props;

    const activeTab = this.getChildrenLabels(children)[0];
    this.setActiveTab(activeTab);
  }

  getChildrenLabels = (children) => {
    return children.map(({props}) => props.label);
  }
  
  setActiveTab = (activeTab) => {
    const { activeTab: currentTab } = this.state;

    if (currentTab !== activeTab) {
      this.setState({
        activeTab
      });
    }
  }

  renderTabs = () => {
    const {children = []} = this.props;
    const {activeTab} = this.state;

    return this.getChildrenLabels(children).map((navLabel) => (
      <TabBarNav
        key={navLabel}
        navLabel={navLabel}
        className={cn({active: activeTab === navLabel})}
        onChangeActiveTab={this.setAvtiveTab}
      />
    ));
  }

  render() {
    const {activeTab} = this.state;
    const {children, className, ...attrs} = this.props;
    const classes = cn(
      styles.TabBar,
      className,
    );
    return (
      <div className={classes} {...attrs}>
        <div className={styles.TabBar__nav}>
          {this.renderTabs()}
        </div>
        <div className={styles.TabBar__container}>
          {React.Children.map(children, child => React.cloneElement(child, {activeTab}))}
        </div>
      </div>
    );
  }
};

export default TabBar;