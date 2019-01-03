import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import labelAndInput from '../common/form/LabelAndInput';
import { init } from './BillingCycleActions';
import { BILLING_CYCLES_FORM } from '../main/types';

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit, init, readOnly } = this.props;
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="name"
            component={labelAndInput}
            label="Nome"
            cols="12 4"
            placeholder="Informe o nome"
            readOnly={readOnly}
          />
          <Field
            name="month"
            component={labelAndInput}
            type="number"
            label="Mês"
            cols="12 4"
            placeholder="Informe o mês"
            readOnly={readOnly}
          />
          <Field
            name="year"
            component={labelAndInput}
            type="number"
            label="Ano"
            cols="12 4"
            placeholder="Informe o ano"
            readOnly={readOnly}
          />
        </div>
        <div className="box-footer">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button type="button" className="btn btn-default" onClick={init}>
            Cancelar
          </button>
        </div>
      </form>
    );
  }
}

BillingCycleForm = reduxForm({
  form: BILLING_CYCLES_FORM,
  destroyOnUnmount: false
})(BillingCycleForm);

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(BillingCycleForm);
