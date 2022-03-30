import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

const Home=(props)=>{
    const navigateToMovieList = () =>{
        props.navigation.navigate("MoviesList");
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome in Home Page
            </Text>
            <TouchableOpacity onPress={navigateToMovieList}>
                <View style={styles.button}>
                    <Text style={{fontSize:15,fontWeight:'bold',padding:10}}>
                        Explore movies
                    </Text>

                </View>
            </TouchableOpacity>
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
    },
    button:{
        backgroundColor:'white',
        color:'black',
        borderWidth:2,
        marginTop:10,
        paddingHorizontal:10,
        borderColor:'#2980b9',
        borderRadius:5
    },
});
export default Home;