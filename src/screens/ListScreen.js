import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: "Arkadas 1"},
        {name: "Arkadas 2"},
        {name: "Arkadas 3"},
        {name: "Arkadas 4"},
        {name: "Arkadas 5"},
        {name: "Arkadas 6"},
        {name: "Arkadas 7"},
        {name: "Arkadas 8"},
        {name: "Arkadas 9"},
    ]

    return (
        <FlatList 
        data={friends} 
        renderItem={({item}) => {
                return <Text>{item.name}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({});

export default ListScreen;