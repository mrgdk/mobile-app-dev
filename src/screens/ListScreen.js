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
        //horizontal={true}       turns the flastlist into horizontal
        
        //turn on/off the scroll bar vertical/horizontal
            //showsHorizontalScrollIndicator={false}
            //showsVerticalScrollIndicator={false}
        keyExtractor={friend => friend.name}
        data={friends} 
        renderItem={({item}) => {
                return <Text style={styles.textStyle}>{item.name}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;