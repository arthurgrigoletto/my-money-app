import React, { Component } from 'react';

class TabHeader extends Component {
  render() {
    const { target, icon, label } = this.props;
    return (
      <li>
        <a href="javascript:;" data-toggle="tab" data-target={target}>
          <i className={`fa fa-${icon}`} /> {label}
        </a>
      </li>
    );
  }
}

export default TabHeader;
