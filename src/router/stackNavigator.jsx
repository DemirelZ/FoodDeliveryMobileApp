import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import OrderDelivery from '../screens/OrderDelivery';
import Restaurant from '../screens/Restaurant';
import TabNavigaor from './tabNavigator';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tab" component={TabNavigaor} />
      <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
