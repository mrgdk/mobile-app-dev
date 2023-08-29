import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const PasswordValidation = () => {
    const [password, setPassword] = useState('')

    return <View>
        <Text style={styles.text}>Enter your password</Text>
        <TextInput style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
        />
        {password.length <= 5 ? <Text>Password must be longer than 5 characters</Text>:
            <Text></Text>
        }
    </View>
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    text: {
        fontSize: 30
    }
});

export default PasswordValidation