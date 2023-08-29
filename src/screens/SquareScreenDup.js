import React, {useReducer} from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import { set } from 'react-native-reanimated';
import SquareDetail from '../Components/SquareDetail';

const change = 5;

const reducer = (state, action) => {
    //state === {red:number, green: number, blue:number}
    //action === {type: 'red' || 'green' || 'blue', payload : 15 || -15}

    switch (action.type){
        case 'change_red':
            return (state.red + action.payload > 255 || state.red + action.payload < 0)?  state: {...state, red: state.red + action.payload};
        case'change_green':
            return (state.green + action.payload > 255 || state.green + action.payload < 0)? state: {...state, green: state.green + action.payload};
        case 'change_blue':
            return (state.blue + action.payload > 255 || state.blue + action.payload < 0)? state:{...state, blue: state.blue + action.payload};
        default:
            return state;
    }
}

const SquareScreenReducer = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue:0})

    return <View>
        <SquareDetail 
        color="Red" 
        onIncrease={() => dispatch({type: "change_red", payload: change})} 
        onDecrease={() => dispatch({type: "change_red", payload: (-1 * change)})}/>
        <SquareDetail 
        color="Green" 
        onIncrease={() => dispatch({type: "change_green", payload: change})} 
        onDecrease={() => dispatch({type: "change_green", payload: (-1 * change)})}/>
        <SquareDetail 
        color="Blue"
        onIncrease={() => dispatch({type: "change_blue", payload: change})} 
        onDecrease={() => dispatch({type: "change_blue", payload: (-1 * change)})}/>

        <View style={{height:100, width:100, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}}/>
    </View>;
}

const styles = StyleSheet.create({});

export default SquareScreenReducer;