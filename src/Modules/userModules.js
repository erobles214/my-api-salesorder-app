import callApi from '../API/apiClient';
import { GET_USERS, UPDATE_USER, TOKEN } from '../API/URLs';

export const getUsers = () => callApi({ url: GET_USERS });