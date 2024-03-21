import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {Image} from 'react-native';
import {COLORS} from '../theme/theme';

const Tab = createBottomTabNavigator();

function TabNavigaor() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown:false
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/cutlery.png')}
              resizeMode="contain"
              style={{
                width: focused ? 36 : 25,
                height: focused ? 36 : 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
                
                
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/search.png')}
              resizeMode="contain"
              style={{
                width: focused ? 36 : 25,
                height: focused ? 36 : 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Like"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/like.png')}
              resizeMode="contain"
              style={{
                width: focused ? 36 : 25,
                height: focused ? 36 : 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/user.png')}
              resizeMode="contain"
              style={{
                width: focused ? 36 : 25,
                height: focused ? 36 : 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigaor;
