import React, { FC } from 'react';
import { Picker } from '@react-native-picker/picker';
import Arrow from '@assets/svg/Arrow';
import { View, Text, TouchableOpacity } from 'react-native';
import { IPropsPicker } from './useProps';
import { styles } from './styles';

export const SortPickerView: FC<IPropsPicker> = ({ onPressHandler, equal, selectedSort, onSortHandler }) =>
    <View style={styles.container}>
        <Text style={styles.filter}>Filter: </Text>
        <View>
            <TouchableOpacity
                style={[styles.button, { transform: [{ rotateX: equal ? '0deg' : '180deg' }] }]}
                onPress={onPressHandler}
            >
                <Arrow color={'black'} />
            </TouchableOpacity>
        </View>
        <View style={styles.viewPicker}>
            <Picker
                mode="dropdown"
                style={styles.picker}
                selectedValue={selectedSort}
                onValueChange={onSortHandler}>
                <Picker.Item label="Id" value="id" />
                <Picker.Item label="First Name" value="first_name" />
                <Picker.Item label="Last Name" value="last_name" />
                <Picker.Item label="Email" value="email" />
                <Picker.Item label="Rating" value="rating" />
                <Picker.Item label="Salary" value="salary" />
            </Picker>
        </View>
    </View>;
