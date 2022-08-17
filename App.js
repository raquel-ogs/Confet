import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './src/pages/home';
import Product from './src/pages/product';
import About from './src/pages/about';
import Contact from './src/pages/contact';

const Tab = createBottomTabNavigator();


export default function App(){
  

  return(
    
    
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: ({height: 60}),
        tabBarIcon: ({ focused, size, color}) => {
          let iconName;
          size = 30;
          
          switch(route.name) {
            case 'Home':
              iconName = focused ? 'home-variant': 'home-variant-outline';
              break;
            case 'Product':
              iconName = focused ? 'shopping': 'shopping-outline';
              break;
            case 'About':
              iconName = focused ? 'account-group' : 'account-group-outline';
              break;
            default:
              iconName = focused ? 'phone': 'phone-outline';
              break;

          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;

        },
        
      })}
    tabBarOptions={{	
      showLabel: false,
      activeTintColor: '#black',
      inactiveTintColor: 'gray',    
    }}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Product' component={Product} />
        <Tab.Screen name='About' component={About} />
        <Tab.Screen name='Contact' component={Contact} />

      </Tab.Navigator>
    </NavigationContainer>
    
  );
}