import axios from 'axios';
import httpStatus from 'http-status';
import config from '../config/config';

import ApiError from '../errors/ApiError';
import shopifyService from './shopifyService';

axios.defaults.baseURL = 'https://app.hypotenuse.ai/api/v1';
axios.defaults.headers.common['X-API-KEY'] = config.hypotenuse.apiKey;
const webhookURL = config.baseURL + '/callback';

const generateContent = async (generatorRequest) => {
  try {
    let response = await axios.post('generations/create', generatorRequest);
    return response.data;
  } catch (error: any) {
    throw new ApiError(httpStatus.NOT_FOUND, error.response.data);
  }
};

export default {
  generateContent,
};