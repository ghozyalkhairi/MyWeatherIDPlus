import {FC} from 'react';
import {Text} from '@rneui/themed';
import {styles} from './style';

const Header: FC = () => {
  return (
    <Text style={styles.title}>
      MyWeatherID
      <Text style={styles.gold}>+</Text>
    </Text>
  );
};

export default Header;
