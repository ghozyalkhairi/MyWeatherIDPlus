import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {fetchProvinsi, fetchKota} from './lokasiThunks';

const initialState: LokasiState = {
  userLocation: {
    kota: 'Pontianak',
    provinsi: 'Kalimantan Barat',
    id: '61',
  },
  listKota: [],
  listProvinsi: [],
  isLoading: {
    fetchProvinsi: false,
    fetchKota: false,
  },
  isError: {
    fetchProvinsi: false,
    fetchKota: false,
  },
  isSuccess: {
    fetchProvinsi: false,
    fetchKota: false,
  },
};

const lokasiSlice = createSlice({
  name: 'lokasi',
  initialState,
  reducers: {
    changeUserLocation: (
      state,
      action: PayloadAction<{
        kota: string;
        provinsi: string;
        id: string;
      }>,
    ) => {
      state.userLocation = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchProvinsi.pending, (state, action) => {
        state.isLoading.fetchProvinsi = true;
        state.isError.fetchProvinsi = false;
        state.isSuccess.fetchProvinsi = false;
      })
      .addCase(fetchProvinsi.fulfilled, (state, action) => {
        state.isLoading.fetchProvinsi = false;
        state.isError.fetchProvinsi = false;
        state.isSuccess.fetchProvinsi = true;
        state.listProvinsi = action.payload;
      })
      .addCase(fetchProvinsi.rejected, (state, action) => {
        state.isLoading.fetchProvinsi = false;
        state.isError.fetchProvinsi = true;
        state.isSuccess.fetchProvinsi = false;
      })
      .addCase(fetchKota.pending, (state, action) => {
        state.isLoading.fetchKota = true;
        state.isError.fetchKota = false;
        state.isSuccess.fetchKota = false;
      })
      .addCase(fetchKota.fulfilled, (state, action) => {
        state.isLoading.fetchKota = false;
        state.isError.fetchKota = false;
        state.isSuccess.fetchKota = true;
        state.listKota = action.payload;
      })
      .addCase(fetchKota.rejected, (state, action) => {
        state.isLoading.fetchKota = false;
        state.isError.fetchKota = true;
        state.isSuccess.fetchKota = false;
      }),
});

export const selectUserLocation = (state: RootState) => state.lokasi;
export const {changeUserLocation} = lokasiSlice.actions;
export default lokasiSlice.reducer;
