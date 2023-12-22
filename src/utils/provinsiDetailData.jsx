import axios from 'axios';

const API_ENDPOINTS_PROVINSI = {
  getDataBudaya: 'https://techomfestculturekuapi.000webhostapp.com/api/provinsi/show',
  getDataBudayaById: 'https://techomfestculturekuapi.000webhostapp.com/api/provinsi/show/{id}',
  postDataBudaya: 'https://techomfestculturekuapi.000webhostapp.com/api/provinsi/store',
  deleteDataBudaya: 'https://techomfestculturekuapi.000webhostapp.com/api/provinsi/delete/{id}'
};

const API_ENDPOINTS_JENIS_BUDAYA = {
  getDataBudaya: 'https://techomfestculturekuapi.000webhostapp.com/api/jenis-budaya/show',
  getDataBudayaById: 'https://techomfestculturekuapi.000webhostapp.com/api/jenis-budaya/show/{id}',
  postDataBudaya: 'https://techomfestculturekuapi.000webhostapp.com/api/jenis-budaya/store',
  deleteDataBudaya: 'https://techomfestculturekuapi.000webhostapp.com/api/jenis-budaya/delete/{id}'
};

const API_ENDPOINTS_BUDAYA = {
  getDataBudaya: 'https://techomfestculturekuapi.000webhostapp.com/api/budaya/show',
  getDataBudayaById: 'https://techomfestculturekuapi.000webhostapp.com/api/budaya/show/{id}',
  postDataBudaya: 'https://techomfestculturekuapi.000webhostapp.com/api/budaya/store',
  deleteDataBudaya: 'https://techomfestculturekuapi.000webhostapp.com/api/budaya/delete/{id}'
};

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
