import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen ({navigation}){
  return(
    <View style={styles.container}>
      <Text>Home screen </Text>
      <Button title='Go to details' onPress={()=>navigation.navigate('Details')}/>
    </View>
  )
}
function DetailsScreen (){
  return(
    <View style={styles.container}>
      <Text>Details screen </Text>
    </View>
  )
}
const {Navigator, Screen }= createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomeScreen} options={{title:'Overview'}}/>
        <Screen name="Details" component={DetailsScreen} />
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
