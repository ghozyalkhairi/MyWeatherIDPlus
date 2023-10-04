import {FC} from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Credits from '../../components/Credits';
import Header from '../../components/Header';

const Info: FC<
  NativeStackScreenProps<InfoStackParamList, 'InfoScreen'>
> = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Credits />
    </View>
  );
};

export default Info;
