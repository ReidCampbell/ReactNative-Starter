import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
    return (
        <View>
            <ColorCounter color="red" />
            <ColorCounter color="green" />
            <ColorCounter color="blue" />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;
