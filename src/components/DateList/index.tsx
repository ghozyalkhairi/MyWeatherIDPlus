import {memo} from 'react';
import {FlatList} from 'react-native';
import DateItem from '../DateItem';
import {useAppSelector} from '../../app/hook';
import {selectCuaca} from '../../features/cuaca/cuacaSlice';

const TanggalList = () => {
  const {dateList, date} = useAppSelector(selectCuaca);
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={dateList}
      contentContainerStyle={{alignSelf: 'center', marginTop: 24}}
      style={{marginHorizontal: -24}}
      keyExtractor={item => item.raw}
      renderItem={({item, index}) => (
        <DateItem item={item} index={index} currentDate={date} />
      )}
    />
  );
};

export default memo(TanggalList);
