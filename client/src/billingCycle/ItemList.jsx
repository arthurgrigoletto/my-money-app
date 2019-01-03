import React, { Component } from 'react';
import { Field, arrayInsert, arrayRemove } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../common/layout/Grid';
import Input from '../common/form/Input';
import If from '../common/operator/If';
import { BILLING_CYCLES_FORM } from '../main/types';

class ItemList extends Component {
  add(index, item = {}) {
    if (!this.props.readOnly) {
      this.props.arrayInsert(
        BILLING_CYCLES_FORM,
        this.props.field,
        index,
        item
      );
    }
  }

  remove(index) {
    if (!this.props.readOnly && this.props.list.length > 1) {
      this.props.arrayRemove(BILLING_CYCLES_FORM, this.props.field, index);
    }
  }
  renderRows() {
    const list = this.props.list || [];

    const { field, readOnly } = this.props;

    return list.map((item, index) => (
      <tr key={index}>
        <td>
          <Field
            name={`${field}[${index}].name`}
            component={Input}
            placeholder="Informe o nome"
            readOnly={readOnly}
          />
        </td>
        <td>
          <Field
            name={`${field}[${index}].value`}
            component={Input}
            placeholder="Informe o valor"
            readOnly={readOnly}
          />
        </td>
        <If test={this.props.showStatus}>
          <Field
            name={`${field}[${index}].status`}
            component={Input}
            placeholder="Informe o status"
            readOnly={readOnly}
          />
        </If>
        <td>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.add(index + 1)}
          >
            <i className="fa fa-plus" />
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => this.add(index + 1, item)}
          >
            <i className="fa fa-clone" />
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.remove(index)}
          >
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    const { cols, legend } = this.props;
    return (
      <Grid cols={cols}>
        <fieldset>
          <legend>{legend}</legend>
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <If test={this.props.showStatus}>
                  <th>Status</th>
                </If>
                <th className="table-actions">Ações</th>
              </tr>
            </thead>
            <tbody>{this.renderRows()}</tbody>
          </table>
        </fieldset>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ arrayInsert, arrayRemove }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(ItemList);
