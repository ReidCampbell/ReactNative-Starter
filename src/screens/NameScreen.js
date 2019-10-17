import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const NameScreen = () => {
    const [name, setName] = useState("");

    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect="false"
                value={name}
                onChangeText={newValue => setName(newValue)}
            />
            {name.length < 4 ? (
                <Text>Password must be 4 characters</Text>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: "black",
        borderWidth: 1
    }
});

export default NameScreen;
