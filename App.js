
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import Discover from './screens/Discover';
import Item from './screens/ItemScreen';
import HotelScreen from './screens/HotelScreen';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Discover" component={Discover} />
        <Stack.Screen name="Item" component={Item} />
        <Stack.Screen name="Hotel" component={HotelScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );}