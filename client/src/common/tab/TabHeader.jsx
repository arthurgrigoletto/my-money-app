import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectTab } from './TabActions';
import If from '../operator/If';

class TabHeader extends Component {
  render() {
    const { target, icon, label, selectTab } = this.props;
    const { selected, visible } = this.props.tab;

    const selecionado = selected === target;
    const visivel = visible[target];

    return (
      <If test={visivel}>
        <li className={selecionado ? 'active' : ''}>
          <a
            href="javascript:;"
            onClick={() => selectTab(target)}
            data-toggle="tab"
            data-target={target}
          >
            <i className={`fa fa-${icon}`} /> {label}
          </a>
        </li>
      </If>
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
