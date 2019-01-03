import axios from 'axios';
import {
  BILLING_CYCLES_FETCHED,
  BILLING_CYCLES_FORM,
  TAB_LIST,
  TAB_CREATE,
  TAB_UPDATE,
  TAB_DELETE
} from '../main/types';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from '../common/tab/TabActions';

const BASE_URL = 'http://localhost:3003/api';
const INITIAL_VALUES = {};

export const getList = () => {
  const request = axios.get(`${BASE_URL}/billingCycles`);

  return {
    type: BILLING_CYCLES_FETCHED,
    payload: request
  };
};

export const create = values => submit(values, 'post');

export const update = values => submit(values, 'put');

export const remove = values => submit(values, 'delete');

const submit = (values, method) => dispatch => {
  const id = values._id ? values._id : '';

  axios[method](`${BASE_URL}/billingCycles/${id}`, values)
    .then(res => {
      toastr.success('Sucesso', 'Operação realizada com sucesso');
      dispatch(init());
    })
    .catch(err => {
      err.response.data.errors.map(error => toastr.error('Erro', error));
    });
};

export const showUpdate = billingCycle => {
  return [
    showTabs(TAB_UPDATE),
    selectTab(TAB_UPDATE),
    initialize(BILLING_CYCLES_FORM, billingCycle)
  ];
};

export const showDelete = billingCycle => {
  return [
    showTabs(TAB_DELETE),
    selectTab(TAB_DELETE),
    initialize(BILLING_CYCLES_FORM, billingCycle)
  ];
};

export const init = () => {
  return [
    showTabs(TAB_LIST, TAB_CREATE),
    selectTab(TAB_LIST),
    getList(),
    initialize(BILLING_CYCLES_FORM, INITIAL_VALUES)
  ];
};
