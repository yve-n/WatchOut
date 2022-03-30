import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

const Home=()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome in Home Page
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        color:'black',
        fontSize:20,
        alignItems:'center',
        justifyContent:'center',
    }
});
export default Home;