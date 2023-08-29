import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { set } from 'react-native-reanimated';

const ViewScreen = () => {
    const [name, setName] = useState('')

    return <View>
        <Text style={styles.text}>Enter Name</Text>
        <TextInput style={styles.input} 
        autoCapitalize='none' 
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
        />
        <Text>Name: {name}</Text>
    </View>
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    text:{
        fontSize: 30
    }
});

export default ViewScreen;
