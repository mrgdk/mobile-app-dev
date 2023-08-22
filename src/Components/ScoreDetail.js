import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

const ScoreDetail = ({path, title, score}) => {
    return <View>
        <Image source={path}/>
        <Text>{title}</Text>
        <Text>Image Score - {score}</Text>
    </View>
}


const styles = StyleSheet.create({});

export default ScoreDetail;