import React from "react";
import { ActivityIndicator, View } from "react-native";

const Loading = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#FA9D24"}}>
            <ActivityIndicator size={'large'} color={'white'}/>
        </View>
    );
}


export default Loading;