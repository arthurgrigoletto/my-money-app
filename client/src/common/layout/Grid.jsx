import React, { Component } from 'react';

export default class Grid extends Component {
  toCssClasses(numbers) {
    const cols = numbers ? numbers.split(' ') : [];
    let classes = '';

    if (cols[0]) classes += `col-xs-${col[0]}`;
    if (cols[1]) classes += `col-sm-${col[1]}`;
    if (cols[2]) classes += `col-md-${col[2]}`;
    if (cols[3]) classes += `col-lg-${col[3]}`;

    return classes;
  }
  render() {
    const { cols, children } = this.props;
    const gridClasses = this.toCssClasses(cols || '12');

    return <div className={gridClasses}>{children}</div>;
  }
}
