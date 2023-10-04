import {FC} from 'react';
import {Image, Text} from '@rneui/themed';
import {View} from 'react-native';
import {styles} from './style';
import LocationIcon from '../../icons/LocationIcon';
import {useAppSelector} from '../../app/hook';
import {selectCuaca} from '../../features/cuaca/cuacaSlice';
import {selectUserLocation} from '../../features/lokasi/lokasiSlice';
import {format, parseISO} from 'date-fns';
import {id} from 'date-fns/locale';

const MainWeather: FC = () => {
  const {date, cuacaSaatIni} = useAppSelector(selectCuaca);
  const {userLocation} = useAppSelector(selectUserLocation);

  const detailHari = (tgl: string) =>
    format(parseISO(tgl), 'EEEE', {locale: id});
  const detailTanggal = (tgl: string) =>
    format(parseISO(tgl), 'dd MMM', {locale: id});

  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <Text style={styles.currentTime}>{cuacaSaatIni.waktu} Ini</Text>
        <Text style={styles.dateText}>
          {detailHari(date)}, {detailTanggal(date)}
        </Text>
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.degreeText}>
          {cuacaSaatIni.suhu}
          <Text style={styles.degreeGold}>ºC</Text>
        </Text>
        <Image
          source={{
            uri: cuacaSaatIni.gambar,
          }}
          style={styles.weatherImage}
        />
      </View>
      <View style={styles.flexRowAlt}>
        <LocationIcon width={16} height={16} />
        <Text style={styles.locationText}>
          {userLocation.kota}, {userLocation.provinsi}
        </Text>
      </View>
    </View>
  );
};

export default MainWeather;
