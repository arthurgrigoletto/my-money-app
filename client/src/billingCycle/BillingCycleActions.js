import axios from 'axios';
import { BILLING_CYCLES_FETCHED } from '../main/types';

const BASE_URL = 'http://localhost:3003/api';

export const getList = () => {
  const request = axios.get(`${BASE_URL}/billingCycles`);

  return {
    type: BILLING_CYCLES_FETCHED,
    payload: request
  };
};
