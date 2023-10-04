import {FC} from 'react';
import {FlatList} from 'react-native';
import WeatherItem from '../WeatherItem';
import {useAppSelector} from '../../app/hook';
import {selectCuaca} from '../../features/cuaca/cuacaSlice';

const WeatherList: FC = () => {
  const {dataSuhuCuaca} = useAppSelector(selectCuaca);
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{alignSelf: 'center'}}
      style={{marginHorizontal: -20}}
      data={dataSuhuCuaca}
      keyExtractor={item => item.waktu}
      renderItem={({item, index}) => (
        <WeatherItem style={index === 0 ? {marginLeft: 20} : null} {...item} />
      )}
    />
  );
};

export default WeatherList;
