import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import If from '../operator/If';

class TabContent extends Component {
  render() {
    const { id, children } = this.props;
    const { selected, visible } = this.props.tab;

    const selecionado = selected === id;
    const visivel = visible[id];

    return (
      <If test={visivel}>
        <div id={id} className={`tab-pane ${selecionado ? 'active' : ''}`}>
          {children}
        </div>
      </If>
    );
  }
}

const mapStateToProps = state => ({
  tab: state.tab
});

export default connect(mapStateToProps)(TabContent);
