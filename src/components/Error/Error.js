import React from "react";
import { Text, View } from "react-native";

const Error = ({ error }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{error}</Text>
        </View>
    );
}


export default Error;