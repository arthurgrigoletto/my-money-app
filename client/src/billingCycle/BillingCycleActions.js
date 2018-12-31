import axios from 'axios';
import { BILLING_CYCLES_FETCHED } from '../main/types';
import { toastr } from 'react-redux-toastr';

const BASE_URL = 'http://localhost:3003/api';

export const getList = () => {
  const request = axios.get(`${BASE_URL}/billingCycles`);

  return {
    type: BILLING_CYCLES_FETCHED,
    payload: request
  };
};

export const create = values => {
  axios
    .post(`${BASE_URL}/billingCycles`, values)
    .then(res => {
      toastr.success('Sucesso', 'Operação realizada com sucesso');
    })
    .catch(err => {
      err.response.data.errors.map(error => toastr.error('Erro', error));
    });

  return {
    type: 'TEMP'
  };
};
