import axios from 'axios';
import { BILLING_CYCLES_FETCHED, BILLING_CYCLES_FORM, TAB_LIST, TAB_CREATE } from '../main/types';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm } from 'redux-form';
import { showTabs, selectTab } from '../common/tab/TabActions';

const BASE_URL = 'http://localhost:3003/api';

export const getList = () => {
  const request = axios.get(`${BASE_URL}/billingCycles`);

  return {
    type: BILLING_CYCLES_FETCHED,
    payload: request
  };
};

export const create = values => dispatch => {
  axios
    .post(`${BASE_URL}/billingCycles`, values)
    .then(res => {
      toastr.success('Sucesso', 'Operação realizada com sucesso');
      dispatch([
        resetForm(BILLING_CYCLES_FORM),
        getList(),
        selectTab(TAB_LIST),
        showTabs(TAB_LIST, TAB_CREATE)
      ])
    })
    .catch(err => {
      err.response.data.errors.map(error => toastr.error('Erro', error));
    });
};
