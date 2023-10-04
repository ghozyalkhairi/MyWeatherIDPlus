import {FC} from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {styles} from './style';
import {useAppDispatch} from '../../app/hook';
import {fetchKota} from '../../features/lokasi/lokasiThunks';

interface Props {
  listProvinsi: Array<DataProvinsi>;
  selectedProv: string;
  setSelectedProv: (itemValue: string) => void;
}

const ProvPicker: FC<Props> = ({
  listProvinsi,
  selectedProv,
  setSelectedProv,
}) => {
  const dispatch = useAppDispatch();
  const onProvChange = (itemValue: string) => {
    setSelectedProv(itemValue);
    dispatch(fetchKota(itemValue));
  };
  return (
    <View style={styles.container}>
      <Picker
        style={{color: '#FED059'}}
        dropdownIconColor="#FED059"
        selectedValue={selectedProv}
        onValueChange={onProvChange}>
        {listProvinsi.map((item, index) => {
          return (
            <Picker.Item key={item.id} label={item.name} value={item.id} />
          );
        })}
      </Picker>
    </View>
  );
};

export default ProvPicker;
