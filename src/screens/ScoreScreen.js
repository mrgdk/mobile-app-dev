import React from 'react';
import {View, StyleSheet} from 'react-native';
import ScoreDetail from '../Components/ScoreDetail';

const ScoreScreen = () => {
    return <View>
        <ScoreDetail title="Forest" score={9} path={require('../../assets/forest.jpg')}/>
        <ScoreDetail title="Beach" score={7} path={require('../../assets/beach.jpg')}/>
        <ScoreDetail title="Mountain" score={4} path={require('../../assets/mountain.jpg')}/>
    </View>
}

const styles = StyleSheet.create({});

export default ScoreScreen;