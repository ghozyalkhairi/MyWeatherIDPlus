import {FC, useCallback} from 'react';
import {View, ToastAndroid} from 'react-native';
import {styles} from './style';
import {Image, Text} from '@rneui/themed';
import {useFocusEffect} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useAppDispatch, useAppSelector} from '../../app/hook';
import {selectUserLocation} from '../../features/lokasi/lokasiSlice';
import {fetchProvinsi} from '../../features/lokasi/lokasiThunks';
import {fetchCuaca} from '../../features/cuaca/cuacaThunks';
import {
  selectCuaca,
  setDataSuhuCuaca,
  getDateList,
  resetFetchCuaca,
} from '../../features/cuaca/cuacaSlice';

const Splash: FC<NativeStackScreenProps<RootStackParamList, 'Splash'>> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch();
  const {isSuccess, isLoading, isError, userLocation} =
    useAppSelector(selectUserLocation);

  const {
    isSuccess: isSuccessCuaca,
    isLoading: isLoadingCuaca,
    isError: isErrorCuaca,
    dataCuaca,
  } = useAppSelector(selectCuaca);

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchProvinsi());
      dispatch(
        fetchCuaca({
          dataLokasi: userLocation,
        }),
      );
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      if (isSuccess.fetchProvinsi && isSuccessCuaca.fetchCuaca) {
        dispatch(setDataSuhuCuaca(userLocation.kota));
        dispatch(getDateList());
        navigation.replace('MainTab');
      }
      if (isError.fetchProvinsi || isErrorCuaca.fetchCuaca) {
        ToastAndroid.show(
          'Gagal mengambil data, periksa koneksi anda',
          ToastAndroid.LONG,
        );
      }

      return () => {
        dispatch(resetFetchCuaca());
      };
    }, [
      isSuccess.fetchProvinsi,
      isError.fetchProvinsi,
      isSuccessCuaca.fetchCuaca,
      isErrorCuaca.fetchCuaca,
    ]),
  );

  return (
    <View style={styles.container}>
      <Image
        source={require('../../images/png/splash.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>
        MyWeatherID
        <Text style={styles.gold}>+</Text>
      </Text>

      <Text style={styles.version}>v0.0.8</Text>

      <Text style={styles.subtitle}>
        Cek cuaca di sekitar anda dengan mudah
      </Text>
    </View>
  );
};

export default Splash;
