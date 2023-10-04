import {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../stacks/HomeStack';
import HomeIcon from '../../icons/HomeIcon';
import LocationStack from '../stacks/LocationStack';
import LocationIcon from '../../icons/LocationIcon';
import InfoStack from '../stacks/InfoStack';
import InfoIcon from '../../icons/InfoIcon';

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTab: FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1C1D4B',
          borderTopColor: '#1C1D4B',
          height: 60,
          paddingBottom: 5,
        },
        tabBarActiveTintColor: '#FED059',
        tabBarInactiveTintColor: '#F8F8F8',
        tabBarLabelStyle: {
          fontFamily: 'Poppins-Regular',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({focused}) => (
            <HomeIcon
              width={28}
              height={28}
              color={focused ? '#FED059' : '#F8F8F8'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={LocationStack}
        options={{
          tabBarLabel: 'Lokasi',
          tabBarIcon: ({focused}) => (
            <LocationIcon
              width={28}
              height={28}
              color={focused ? '#FED059' : '#F8F8F8'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Info"
        component={InfoStack}
        options={{
          tabBarLabel: 'Tentang',
          tabBarIcon: ({focused}) => (
            <InfoIcon
              width={28}
              height={28}
              color={focused ? '#FED059' : '#F8F8F8'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
