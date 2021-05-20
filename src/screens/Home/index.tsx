import React from 'react';
import { useProps } from './useProps';
import { HomeScreenView } from './view';

export const HomeScreen = () => (
  <HomeScreenView {...{ ...useProps() }} />
);
