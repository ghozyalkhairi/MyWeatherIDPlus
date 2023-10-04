import {Text, View} from 'react-native';
import {Image} from '@rneui/themed';
import {styles} from './style';
import {FC} from 'react';

interface Props {
  waktu: string;
  suhu: string;
  gambar: string;
  style?: object | null;
}

const WeatherItem: FC<Props> = ({waktu, suhu, gambar, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{waktu}</Text>
      <Image style={styles.logoCuaca} source={{uri: gambar}} />
      <Text style={styles.text}>{suhu} °C</Text>
    </View>
  );
};

export default WeatherItem;
