import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1, borderRadius: 10, margin: 10,
    },
    subContainer: {
        left: 0,
        right: 0,
        bottom: 0,
        padding: 10,
        position: 'absolute',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    image: {
        height: 200,
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'right',
    }
});