import axios from 'axios';
import { API_ENDPOINTS_PROVINSI, API_ENDPOINTS_JENIS_BUDAYA, API_ENDPOINTS_BUDAYA } from '../utils/config';

const apiService = {
  getProvinsiData: async () => {
    try {
      const response = await axios.get(API_ENDPOINTS_PROVINSI.getDataBudaya);
      return response.data;
    } catch (error) {
      console.error('Error fetching provinsi data:', error);
      throw error;
    }
  },

  getJenisBudayaData: async () => {
    try {
      const response = await axios.get(API_ENDPOINTS_JENIS_BUDAYA.getDataBudaya);
      return response.data;
    } catch (error) {
      console.error('Error fetching jenis-budaya data:', error);
      throw error;
    }
  },

  getBudayaData: async () => {
    try {
      const response = await axios.get(API_ENDPOINTS_BUDAYA.getDataBudaya);
      return response.data;
    } catch (error) {
      console.error('Error fetching budaya data:', error);
      throw error;
    }
  },
};

export default apiService;
