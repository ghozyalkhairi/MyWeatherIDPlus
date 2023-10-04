import {FC} from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import MainWeather from '../../components/MainWeather';
import WeatherList from '../../components/WeatherList';
import DateList from '../../components/DateList';
import Header from '../../components/Header';

const Home: FC<
  NativeStackScreenProps<HomeStackParamList, 'HomeScreen'>
> = () => {
  return (
    <View style={styles.container}>
      <Header />
      <MainWeather />
      <DateList />
      <WeatherList />
    </View>
  );
};

export default Home;
