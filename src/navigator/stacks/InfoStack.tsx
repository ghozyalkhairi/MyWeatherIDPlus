import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Info from '../../screens/Info';

const Stack = createNativeStackNavigator<InfoStackParamList>();

const InfoStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="InfoScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="InfoScreen" component={Info} />
    </Stack.Navigator>
  );
};

export default InfoStack;
