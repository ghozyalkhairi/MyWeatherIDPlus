import {TouchableOpacity} from 'react-native';
import {Text} from '@rneui/themed';
import {styles} from './style';
import {FC} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hook';
import {
  setCurrentDate,
  setDataSuhuCuaca,
} from '../../features/cuaca/cuacaSlice';
import {selectUserLocation} from '../../features/lokasi/lokasiSlice';

interface Props {
  item: any;
  index: number;
  currentDate: string;
}

const DateItem: FC<Props> = ({item, index, currentDate}) => {
  const dispatch = useAppDispatch();
  const {userLocation} = useAppSelector(selectUserLocation);
  const handlePress = () => {
    dispatch(setCurrentDate(item.raw));
    dispatch(setDataSuhuCuaca(userLocation.kota));
  };
  return (
    <TouchableOpacity hitSlop={10} onPress={handlePress}>
      <Text
        style={[
          item.raw === currentDate ? styles.currentTanggal : styles.tanggal,
          index === 0 ? {marginLeft: 24} : null,
        ]}>
        {item.formatted}
      </Text>
    </TouchableOpacity>
  );
};

export default DateItem;
