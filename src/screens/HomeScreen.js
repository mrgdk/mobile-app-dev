import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button 
    title="Go to Components Screen"
    onPress={()=> navigation.navigate('Components')}
    />
    <Button
      title="Go to List Screen"
      onPress={()=> navigation.navigate("List")}
    />
    <Button
      title="Go to Image Screen"
      onPress={()=> navigation.navigate("Image")}
    />

    <Button
      title="Go to ScoreScreen"
      onPress={()=> navigation.navigate("Score")}
    />

    <Button
      title="Go to Counter"
      onPress={()=> navigation.navigate("Counter")}
    />

    <Button
      title="Go to Color"
      onPress={()=> navigation.navigate("Color")}
    />
    <Button
      title="Go to Square"
      onPress={()=> navigation.navigate("Square")}
    />
    <Button
      title="Go to Text"
      onPress={()=> navigation.navigate("Text")}
    />
    <Button
      title="Go to Password Validation"
      onPress={()=> navigation.navigate("Password")}
    />
    <Button
      title="Go to Box Screen"
      onPress={()=> navigation.navigate("BoxScreen")}
    />
    <Button
      title="Go to task3"
      onPress={()=> navigation.navigate("task3")}
    />
    </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,

  },
});

export default HomeScreen;
