import React, {useState} from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import { set } from 'react-native-reanimated';
import SquareDetail from '../Components/SquareDetail';

const change = 5;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);


    const setColor = (color, change) => {
        switch(color){
            case 'red':
                red+change > 255 || red + change < 0? null : setRed(red + change);
                return;
            case 'blue':
                blue+change > 255 || blue + change < 0? null : setBlue(blue + change);
                return;
            case 'green':
                green+change > 255 || green + change < 0? null : setGreen(green + change);
                return;
            default:
                return;
        }
    };

    return <View>
        <SquareDetail 
        color="Red" 
        onIncrease={() => setColor("red", change)} 
        onDecrease={() => setColor("red", -1 * change)}/>
        <SquareDetail 
        color="Green" 
        onIncrease={() => setColor("green", change)} 
        onDecrease={() => setColor("green", -1 * change)}/>
        <SquareDetail 
        color="Blue"
        onIncrease={() => setColor("blue", change)} 
        onDecrease={() => setColor("blue", -1 * change)}/>

        <View style={{height:100, width:100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
    </View>;
}

const styles = StyleSheet.create({});

export default SquareScreen;