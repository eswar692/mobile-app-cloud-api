/**
 * @format
 */

import {AppRegistry, StatusBar, useColorScheme, View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { SocketProvider } from './src/socket/Socket';
import { useEffect } from 'react';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

const Main = () => {
    const colorScheme = useColorScheme();
   const backgroundColor = colorScheme === 'dark' ? '#000' : '#fff'
   useEffect(() => {
        const changeNavigationBar = async () => {
            try{
                const response = await changeNavigationBarColor('green');
                console.log(response)
            }catch(e){
                console.log(e)
            }
        };
        changeNavigationBar();
       
   }, [])
    return (
       <View style={{ flex: 1, backgroundColor  }}>
         <SocketProvider>
            <StatusBar  backgroundColor="red" />
            <App />

        </SocketProvider>
       </View>
    );
}

AppRegistry.registerComponent(appName, () => Main);
