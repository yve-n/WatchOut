import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

const MoviesList = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                All Movies
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
    }
});
export default MoviesList;