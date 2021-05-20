import React from 'react';
import { useProps } from './useProps';
import { DetailsScreenView } from './view';


export const DetailsScreen = () => <DetailsScreenView {...useProps()} />