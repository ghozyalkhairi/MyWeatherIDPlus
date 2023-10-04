import {FC, useState} from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ProvPicker from '../../components/ProvPicker';
import LocationList from '../../components/LocationList';
import {useAppSelector} from '../../app/hook';
import {selectUserLocation} from '../../features/lokasi/lokasiSlice';
import Header from '../../components/Header';

const Location: FC<
  NativeStackScreenProps<LocationStackParamList, 'LocationScreen'>
> = ({navigation}) => {
  const {userLocation, listProvinsi} = useAppSelector(selectUserLocation);
  const [selectedProv, setSelectedProv] = useState(userLocation.id);
  return (
    <View style={styles.container}>
      <Header />
      <ProvPicker
        listProvinsi={listProvinsi}
        selectedProv={selectedProv}
        setSelectedProv={setSelectedProv}
      />
      <LocationList
        selectedProv={selectedProv}
        navigation={navigation}
        userProvId={userLocation.id}
      />
    </View>
  );
};

export default Location;
