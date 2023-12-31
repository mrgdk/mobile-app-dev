import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const INCREMENT_BY = 1;

const reducer = (state, action) => {
    switch(action.type){
        case 'increase':
            return {...state, count: state.count + action.payload};
        case 'decrease':
            return {...state, count: state.count - action.payload};
        default:
            return state;
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});

    return <View>
        <Button title='Increase' onPress={() => {
            dispatch({payload: INCREMENT_BY, type: 'increase'});
        }}/>
        <Button title='Decrease' onPress={() => {
            dispatch({payload: INCREMENT_BY, type: 'decrease'});
        }}/>
        <Text>Current Count: {state.count}</Text>
    </View>
}

const styles = StyleSheet.create({});

export default CounterScreen;