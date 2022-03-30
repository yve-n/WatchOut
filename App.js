import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';


const {Navigator, Screen }= createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} 
        options={{
          title:'Overview',
          headerStyle:{
            backgroundColor:"#34495e",
          },
          headerTitleStyle:{
            fontSize:30,
          }
          }}/>
      </Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
