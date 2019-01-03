import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LabelAndInput from '../common/form/LabelAndInput';
import { init } from './BillingCycleActions';
import { BILLING_CYCLES_FORM } from '../main/types';
import ItemList from './ItemList';
import Summary from './Summary';

class BillingCycleForm extends Component {
  calculateSummary() {
    const sum = (t, v) => t + v;

    return {
      sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
      sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
    };
  }

  render() {
    const {
      handleSubmit,
      init,
      readOnly,
      submitClass,
      submitLabel,
      credits,
      debts
    } = this.props;

    const { sumOfCredits, sumOfDebts } = this.calculateSummary();

    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="name"
            component={LabelAndInput}
            label="Nome"
            cols="12 4"
            placeholder="Informe o nome"
            readOnly={readOnly}
          />
          <Field
            name="month"
            component={LabelAndInput}
            type="number"
            label="Mês"
            cols="12 4"
            placeholder="Informe o mês"
            readOnly={readOnly}
          />
          <Field
            name="year"
            component={LabelAndInput}
            type="number"
            label="Ano"
            cols="12 4"
            placeholder="Informe o ano"
            readOnly={readOnly}
          />
          <Summary credit={sumOfCredits} debt={sumOfDebts} />
          <ItemList
            cols="12 6"
            list={credits}
            field="credits"
            legend="Créditos"
            readOnly={readOnly}
          />
          <ItemList
            cols="12 6"
            list={debts}
            field="debts"
            legend="Débitos"
            readOnly={readOnly}
            showStatus
          />
        </div>
        <div className="box-footer">
          <button type="submit" className={`btn btn-${submitClass}`}>
            {submitLabel}
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

const selector = formValueSelector(BILLING_CYCLES_FORM);

const mapStateToProps = state => ({
  credits: selector(state, 'credits'),
  debts: selector(state, 'debts')
});

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillingCycleForm);
