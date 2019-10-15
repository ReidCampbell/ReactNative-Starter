import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.text}>Hello</Text>
            <Button
                title="Go to Components Demo"
                onPress={() => navigation.navigate("Components")}
            />
            <Button
                onPress={() => navigation.navigate("List")}
                title="Go to List Demo"
            />
            <Button
                onPress={() => navigation.navigate("Image")}
                title="Go to Image Demo"
            />
            <Button
                onPress={() => navigation.navigate("Counter")}
                title="Go to Counter Demo"
            />
            <Button
                onPress={() => navigation.navigate("Name")}
                title="Go to Name Entry Demo"
            />
            <Button
                onPress={() => navigation.navigate("Blog")}
                title="Go to Blog Demo"
            />
            <Button
                onPress={() => navigation.navigate("Color")}
                title="Go to Color Demo"
            />
            <Button
                onPress={() => navigation.navigate("Square")}
                title="Go to Square Demo"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;
