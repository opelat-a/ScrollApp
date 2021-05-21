import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        width: 70,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    picker: {
        width: '100%',
        maxHeight: 80,
        overflow: 'hidden',
        justifyContent:'center',
    },
    viewPicker: {
        flex: 2,
        borderColor: 'black',
        borderWidth: 1,
    },
    filter: {
        color: 'black',
        flex: 1,
        fontSize: 20,
    },
});
