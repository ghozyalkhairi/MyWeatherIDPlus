import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Location from '../../screens/Location';

const Stack = createNativeStackNavigator<LocationStackParamList>();

const LocationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="LocationScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LocationScreen" component={Location} />
    </Stack.Navigator>
  );
};

export default LocationStack;
