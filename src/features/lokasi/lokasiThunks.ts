import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchProvinsiRequest, fetchCuacaRequest} from '../../utils/http';

export const fetchProvinsi = createAsyncThunk<DataProvinsi[], void>(
  'lokasi/fetchProvinsi',
  async (_, thunkAPI) => {
    const response = (await fetchProvinsiRequest()) as DataProvinsiHTTPResponse;
    if (response.status === 200) {
      return response.data;
    }
    return thunkAPI.rejectWithValue(response.data);
  },
);

export const fetchKota = createAsyncThunk<DataCuaca[], string>(
  'lokasi/fetchKota',
  async (idProvinsi, thunkAPI) => {
    const response = (await fetchCuacaRequest(
      idProvinsi,
    )) as DataCuacaHTTPResponse;
    if (response.status === 200) {
      const dataFilter = response.data.filter(kota => {
        if (kota.parameter) return kota;
      });
      return dataFilter;
    }
    return thunkAPI.rejectWithValue(response.data);
  },
);
