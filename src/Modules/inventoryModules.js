import callApi from '../API/apiClient';
import { GET_INVENTORY, ADD_MATERIALS, ADD_LABOR } from '../API/URLs';

export const getInventory = () => callApi({url: GET_INVENTORY});

export const postLabor = (postLabor) => callApi({url: ADD_LABOR, method: 'POST', data: postLabor});
export const addMaterial = (addMaterial) => callApi({url: ADD_MATERIALS, method: 'POST', data: addMaterial});
