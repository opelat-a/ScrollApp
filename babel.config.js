module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@services': './src/services/',
          '@selectors': './src/store/selectors/selectors.ts',
          '@screens': './src/screens/',
          '@assets': './src/assets/',
          '@reducers': './src/store/reducers/',
          '@components': './src/components/',

        },
      },
    ],
  ],
};
