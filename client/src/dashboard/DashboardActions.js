import axios from 'axios';
import { BILLING_SUMMARY_FETCHED } from '../main/types';

const BASE_URL = 'http://localhost:3003/api';

export const getSummary = () => {
  const request = axios.get(`${BASE_URL}/billingCycles/summary`);

  return {
    type: BILLING_SUMMARY_FETCHED,
    payload: request
  };
};
