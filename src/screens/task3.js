import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const task3 = () => {
    return <View style={styles.parentStyle}>
        <View style={styles.viewOneStyle}><Text></Text></View>
        <View style={styles.viewTwoStyle}><Text></Text></View>
        <View style={styles.viewThreeStyle}><Text></Text></View>
    </View>
};

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOneStyle: {
        height: 50,
        width: 50,
        backgroundColor:'red'
    },
    viewTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    viewThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'purple'
    },
});


export default task3;