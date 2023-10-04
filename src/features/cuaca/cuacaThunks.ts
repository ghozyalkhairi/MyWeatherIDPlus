import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchCuacaRequest} from '../../utils/http';

export const fetchCuaca = createAsyncThunk<
  DataCuaca[],
  {
    dataLokasi: {
      provinsi: string;
      kota: string;
      id: string;
    };
  }
>('cuaca/fetchCuaca', async (payload, thunkAPI) => {
  const {dataLokasi} = payload;
  const response = (await fetchCuacaRequest(
    dataLokasi.id,
  )) as DataCuacaHTTPResponse;
  if (response.status === 200) {
    const dataFilter = response.data.filter(kota => {
      if (kota.parameter) return kota;
    });
    return dataFilter;
  }
  return thunkAPI.rejectWithValue(response.data);
});
