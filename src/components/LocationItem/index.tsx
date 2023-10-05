import {Text, TouchableOpacity, ToastAndroid} from 'react-native';
import {styles} from './style';
import {FC, useCallback} from 'react';
import CityIcon from '../../icons/CityIcon';
import {useAppDispatch, useAppSelector} from '../../app/hook';
import {changeUserLocation} from '../../features/lokasi/lokasiSlice';
import {
  setDataSuhuCuaca,
  getDateList,
  resetFetchCuaca,
} from '../../features/cuaca/cuacaSlice';
import {fetchCuaca} from '../../features/cuaca/cuacaThunks';
import {selectCuaca} from '../../features/cuaca/cuacaSlice';
import {useFocusEffect} from '@react-navigation/native';
import {Dialog} from '@rneui/themed';

interface Props {
  kota: string;
  provinsi: string;
  selectedProv: string;
  navigation: any;
  userProvId: string;
}

const LocationItem: FC<Props> = ({
  kota,
  provinsi,
  selectedProv,
  navigation,
  userProvId,
}) => {
  const dispatch = useAppDispatch();
  const {isError, isLoading, isSuccess} = useAppSelector(selectCuaca);

  const handlePress = () => {
    dispatch(
      changeUserLocation({id: selectedProv, provinsi: provinsi, kota: kota}),
    );

    if (userProvId === selectedProv) {
      dispatch(setDataSuhuCuaca(kota));
      navigation.navigate('HomeScreen');
      return;
    }

    dispatch(
      fetchCuaca({
        dataLokasi: {
          id: selectedProv,
          provinsi: provinsi,
          kota: kota,
        },
      }),
    );
  };

  useFocusEffect(
    useCallback(() => {
      if (isSuccess.fetchCuaca) {
        dispatch(setDataSuhuCuaca(kota));
        dispatch(getDateList());
        navigation.navigate('HomeScreen');
      }
      if (isError.fetchCuaca) {
        ToastAndroid.show(
          'Gagal mengambil data, periksa koneksi anda',
          ToastAndroid.LONG,
        );
      }

      return () => {
        dispatch(resetFetchCuaca());
      };
    }, [isSuccess.fetchCuaca, isError.fetchCuaca]),
  );

  return (
    <>
      {isLoading.fetchCuaca && (
        <Dialog overlayStyle={styles.overlayStyle}>
          <Dialog.Loading loadingProps={styles.loadingProps} />
        </Dialog>
      )}

      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <CityIcon width={28} height={28} />
        <Text style={styles.teksKota}>{kota}</Text>
      </TouchableOpacity>
    </>
  );
};

export default LocationItem;
