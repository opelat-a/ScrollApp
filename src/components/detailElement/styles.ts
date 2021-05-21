import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    view: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        minHeight: 50,
        flex:1,
    },
    title: {
        fontSize: 16,
        textAlign: 'right',
        flex: 1,
        paddingHorizontal: 10,
        color: 'gray',
    },
    text: {
        textAlign: 'left',
        fontSize: 16,
        flex: 2,
        paddingHorizontal: 10,
    },
});
