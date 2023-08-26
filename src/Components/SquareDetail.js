import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';


const SquareDetail = ({color, onIncrease, onDecrease}) => {
    return <View>
        <Text style={styles.text}>{color}</Text>
        <Button title={`More ${color}`} onPress={() => onIncrease()}/>
        <Button title={`Less ${color}`} onPress={() => onDecrease()}/>
    </View>;
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});


export default SquareDetail;