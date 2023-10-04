import {FC, useCallback} from 'react';
import {FlatList, ToastAndroid} from 'react-native';
import LocationItem from '../LocationItem';
import {useAppSelector} from '../../app/hook';
import {selectCuaca} from '../../features/cuaca/cuacaSlice';
import {selectUserLocation} from '../../features/lokasi/lokasiSlice';
import {styles} from './style';
import {useFocusEffect} from '@react-navigation/native';
import {Dialog} from '@rneui/themed';

interface Props {
  selectedProv: string;
  navigation: any;
  userProvId: string;
}

const LocationList: FC<Props> = ({selectedProv, navigation, userProvId}) => {
  const {dataCuaca} = useAppSelector(selectCuaca);
  const {listKota, isLoading, isError} = useAppSelector(selectUserLocation);

  useFocusEffect(
    useCallback(() => {
      if (isError.fetchKota) {
        ToastAndroid.show('Gagal memuat data', ToastAndroid.SHORT);
      }
    }, [isError.fetchKota]),
  );

  return (
    <>
      {isLoading.fetchKota && (
        <Dialog>
          <Dialog.Loading />
        </Dialog>
      )}
      <FlatList
        data={listKota.length ? listKota : dataCuaca}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        keyExtractor={item => item.$.id}
        renderItem={({item}) => (
          <LocationItem
            kota={item.$.description}
            provinsi={item.$.domain}
            selectedProv={selectedProv}
            navigation={navigation}
            userProvId={userProvId}
          />
        )}
      />
    </>
  );
};

export default LocationList;
