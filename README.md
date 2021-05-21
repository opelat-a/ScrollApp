# ScrollApp
One Paragraph of project description goes here

## Getting Started
Test project with a list of more than 100 items. The project has two screens with the entire list of elements and a detailed screen on which more detailed information.

## Installing
Step to run project

```
npm i
```
### Android
```
npm run android
```

### IOS
```
cd ios
pod install 
or (if u have M1)
arch -x86_64 pod install 
```
After installing dependencies you can run project in xcode or use in termial
```
npm run ios
```
## Project info

Items have simple interface
```
interface Item  = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  rating: number;
  salary: number;
}
```
For generic mock i use:  https://www.mockaroo.com/
For API: https://designer.mocky.io/

#### Framework
- React Native

#### Library
- redux
- react-navigation 5
- react-native-svg
- @react-native-picker/picker