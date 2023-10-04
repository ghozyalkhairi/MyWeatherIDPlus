import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {fetchCuaca} from './cuacaThunks';
import {format, parseISO} from 'date-fns';
import {id} from 'date-fns/locale';
import {imgPath} from '../../utils/service';

const initialState: CuacaState = {
  date: format(new Date(), 'yyyyMMdd'),
  time: format(new Date(), 'kkmm'),
  dateList: [],
  dataCuaca: [],
  dataSuhuCuaca: [],
  cuacaSaatIni: {
    waktu: '',
    suhu: '',
    gambar: '',
  },
  isLoading: {
    fetchCuaca: false,
  },
  isError: {
    fetchCuaca: false,
  },
  isSuccess: {
    fetchCuaca: false,
  },
};

const cuacaSlice = createSlice({
  name: 'cuaca',
  initialState,
  reducers: {
    resetFetchCuaca: state => {
      state.isLoading.fetchCuaca = false;
      state.isError.fetchCuaca = false;
      state.isSuccess.fetchCuaca = false;
    },
    setCurrentDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    setDataSuhuCuaca: (state, action: PayloadAction<string>) => {
      const cuacaKota = state.dataCuaca.find(
        kota =>
          kota.$.description.trim().toLowerCase() ===
          action.payload.trim().toLowerCase(),
      )?.parameter[6] as ParameterCuaca;
      const suhuKota = state.dataCuaca.find(
        kota =>
          kota.$.description.trim().toLowerCase() ===
          action.payload.trim().toLowerCase(),
      )?.parameter[5] as ParameterCuaca;
      const filteredCuaca = cuacaKota.timerange.filter(
        time => time.$.datetime.slice(0, -4) === state.date,
      );
      const filteredSuhu = suhuKota.timerange.filter(
        time => time.$.datetime.slice(0, -4) === state.date,
      );
      const filteredSuhuCuaca = {
        cuaca: filteredCuaca,
        suhu: filteredSuhu,
      };
      const ketWaktu = (index: number) => {
        if (index === 0) return 'Pagi';
        if (index === 1) return 'Siang';
        if (index === 2) return 'Malam';
        if (index === 3) return 'Dini';
      };
      state.dataSuhuCuaca = filteredSuhuCuaca.suhu.map((suhu, index) => {
        return {
          waktu: ketWaktu(index) as string,
          suhu: suhu.value[0]._,
          gambar: imgPath(filteredSuhuCuaca.cuaca[index].value[0]._, index),
        };
      });
      const timestamp = parseInt(state.time.slice(0, 2));
      if (timestamp >= 24 || timestamp < 6)
        state.cuacaSaatIni = state.dataSuhuCuaca[3];
      if (timestamp >= 6 && timestamp < 12)
        state.cuacaSaatIni = state.dataSuhuCuaca[0];
      if (timestamp >= 12 && timestamp < 18)
        state.cuacaSaatIni = state.dataSuhuCuaca[1];
      if (timestamp >= 18 && timestamp < 24)
        state.cuacaSaatIni = state.dataSuhuCuaca[2];
    },

    getDateList: state => {
      const detailHari = (tgl: string) =>
        format(parseISO(tgl), 'EEEE', {locale: id});
      const detailTanggal = (tgl: string) =>
        format(parseISO(tgl), 'dd MMMM', {locale: id});

      const [timerange] = state.dataCuaca.map(k => k.parameter[6].timerange);
      const newTime = timerange.map(time => {
        return {
          formatted: `${detailHari(
            time.$.datetime.slice(0, -4),
          )}, ${detailTanggal(time.$.datetime.slice(0, -4))}`,
          raw: time.$.datetime.slice(0, -4),
        };
      });

      state.dateList = [
        ...new Map(newTime.map(time => [time.raw, time])).values(),
      ];
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCuaca.pending, (state, action) => {
        state.isLoading.fetchCuaca = true;
        state.isError.fetchCuaca = false;
        state.isSuccess.fetchCuaca = false;
      })
      .addCase(fetchCuaca.fulfilled, (state, action) => {
        state.isLoading.fetchCuaca = false;
        state.isError.fetchCuaca = false;
        state.isSuccess.fetchCuaca = true;
        state.dataCuaca = action.payload;
      })
      .addCase(fetchCuaca.rejected, (state, action) => {
        state.isLoading.fetchCuaca = false;
        state.isError.fetchCuaca = true;
        state.isSuccess.fetchCuaca = false;
      }),
});

export const selectCuaca = (state: RootState) => state.cuaca;
export const {setDataSuhuCuaca, getDateList, setCurrentDate, resetFetchCuaca} =
  cuacaSlice.actions;
export default cuacaSlice.reducer;
