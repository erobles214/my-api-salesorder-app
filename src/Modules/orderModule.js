import callApi from '../API/apiClient';
import { GET_WORK_ORDER } from '../API/URLs'

export const getWorkOrder = () => callApi({ url: GET_WORK_ORDER });