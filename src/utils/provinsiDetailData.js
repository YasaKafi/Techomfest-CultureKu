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

const provinsiDetailData = [
    {
      id: 1,
      namaProvinsi: 'Aceh',
      descProvinsi: 'Aceh adalah sebuah provinsi di Indonesia yang terletak di ujung barat laut pulau Sumatera.',
      imageHeroOne: `${imageAsset.TariKecak}`,
      imageHeroTwo: `${imageAsset.PatungCandi}`,
      imageHeroThree: `${imageAsset.TradisiBali}`,
    },
    {
      id: 2,
      namaProvinsi: 'Sumatera Utara',
      descProvinsi: 'Sumatera Utara merupakan provinsi terbesar di Pulau Sumatera.',
      imageHeroOne: `${imageAsset.TariPiring}`,
      imageHeroTwo: `${imageAsset.TariSaman}`,
      imageHeroThree: `${imageAsset.TariKecak}`,
    },
  ];
