import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
    },
    content: {
        width: '100%',
        justifyContent: 'center',
    },
    flatList: {
        width: '100%',
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 10,
    },
    error: {
        flex: 1,
        backgroundColor: 'orange'
    },
    indicator: {
        flex: 1
    }
})