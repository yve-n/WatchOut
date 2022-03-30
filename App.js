import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import MoviesList from './screens/MoviesList';


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
        <Screen name="MoviesList" component={MoviesList}
        options={{
          title:"Movies",
          headerStyle:{
            backgroundColor: "#34495e",
          },
        }} />
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
