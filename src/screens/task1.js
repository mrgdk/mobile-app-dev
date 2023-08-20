import React from 'react';
import {Text, StyleSheet, View} from 'react-native'


const task1 = () => {
    const first = "Getting started with React Native!";
    const name = "Emre";

    return <View>
        <Text style={styles.text1style}>{first}</Text>
        <Text style={styles.text2style}>My name is {name}</Text>
    </View>;
};


const styles = StyleSheet.create({
    text1style:{
        fontSize: 45
    },
    text2style:{
        fontSize: 20
    }
});

export default task1;