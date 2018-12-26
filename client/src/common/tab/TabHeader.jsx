import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectTab } from './TabActions';

class TabHeader extends Component {
  render() {
    const { target, icon, label, tab, selectTab } = this.props;
    const selected = tab.selected === target;

    return (
      <li className={selected ? 'active' : ''}>
        <a
          href="javascript:;"
          onClick={() => selectTab(target)}
          data-toggle="tab"
          data-target={target}
        >
          <i className={`fa fa-${icon}`} /> {label}
        </a>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  tab: state.tab
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectTab }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabHeader);
