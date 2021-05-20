import React from 'react';
import { useProps } from './useProps';
import { SortPickerView } from './view';

export const SortPicker = () => (
    <SortPickerView {...{ ...useProps() }} />
);
