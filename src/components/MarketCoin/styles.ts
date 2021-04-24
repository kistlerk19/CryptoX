import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        marginVertical: 10,
    },
    image: {
        height: 50,
        width: 50,
        marginRight: 10,
        borderRadius: 8
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    value: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
    },
    symbol: {
        color: '#6b6b6b',
        fontWeight: '700'
    },
    // rate: {
    //     color: 'red',
    //     fontWeight: '700'
    // },
})

export default styles;