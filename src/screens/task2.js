import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const task2 = () => {
    const friends = [
        {name: "Friend 1", age: 20},
        {name: "Friend 2", age: 45},
        {name: "Friend 3", age: 32},
        {name: "Friend 4", age: 27},
        {name: "Friend 5", age: 53},
        {name: "Friend 6", age: 30},
        {name: "Friend 7", age: 18}
    ]

    return (
        <FlatList
        data={friends}
        keyExtractor={friend => friend.name}
        renderItem={({item}) => {
            return <Text style={style.textStyle}>{item.name} - Age {item.age}</Text>;
        }}
        />
    );
};


const style = StyleSheet.create({
    textStyle: {
        marginVertical: 10
    }
});

export default task2;
