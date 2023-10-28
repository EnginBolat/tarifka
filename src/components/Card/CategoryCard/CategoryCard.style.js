import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: 'grey',
        padding: 10,
        margin: 10,
        marginRight: 0,
        alignItems: 'center',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
    },
    image: {
        height: Dimensions.get('window').height / 8,
        width: Dimensions.get('window').width / 3,
        marginLeft: 20,
        objectFit: 'contain',
    },
    title: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'center',
        fontSize: 24,
        fontWeight: '400',
    }
});