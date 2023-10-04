import axios from 'axios';
import {getProvURL} from './service';

export const fetchProvinsiRequest = async () => {
  const url = 'http://provinsi-json.vercel.app/';
  const options = {
    method: 'GET',
    url,
  };
  try {
    return await axios.request(options);
  } catch (error) {
    return error;
  }
};

export const fetchCuacaRequest = async (provID: string) => {
  const url = 'https://cuaca-json.vercel.app';
  const options = {
    method: 'GET',
    url: `${url}${getProvURL(parseInt(provID))}`,
  };
  try {
    return await axios.request(options);
  } catch (error) {
    return error;
  }
};
