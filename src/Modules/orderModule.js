import callApi from '../API/apiClient';
import { GET_WORK_ORDER,  ADD_ORDER } from '../API/URLs'

export const getWorkOrder = () => callApi({ url: GET_WORK_ORDER });

export const addWorkOrder = (addOrder) => callApi({url: ADD_ORDER, method: 'POST', data:addOrder});