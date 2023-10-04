import {Image, Text} from '@rneui/themed';
import {FC} from 'react';
import {View} from 'react-native';
import {styles} from './style';

const Credits: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.detailText}>
        Semua data yang digunakan dalam aplikasi ini disediakan oleh BMKG
      </Text>
      <Image
        source={require('../../images/png/logo-bmkg.png')}
        style={styles.imageIcon}
      />
    </View>
  );
};

export default Credits;
