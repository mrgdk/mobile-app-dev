import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../Components/ImageDetail';


const ImageScreen = () => {
    return <View>
        <ImageDetail title="forest" imagePath={require("../../assets/forest.jpg")}/>
        <ImageDetail title="beach" imagePath={require("../../assets/beach.jpg")}/>
        <ImageDetail title="mountain" imagePath={require("../../assets/mountain.jpg")}/>
    </View>
}


const styles = StyleSheet.create({
    textStyle: {
        fontSize:30
    }
});

export default ImageScreen;