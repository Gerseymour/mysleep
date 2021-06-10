import React, {useState} from 'react';
import * as Font from 'expo-font';
import Home from './screens/home'
import AppLoading from 'expo-app-loading';

const getFonts = () => Font.loadAsync({
    'alegreya-regular': require('./assets/fonts/Alegreya-Regular.ttf'),
    'alegreya-semibold': require('./assets/fonts/Alegreya-SemiBold.ttf'),
    'alegreya-bold': require('./assets/fonts/Alegreya-Bold.ttf')
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <Home />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={()=> setFontsLoaded(true)}
        onError={console.warn}
    />
    )
  }
}

