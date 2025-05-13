/**
 * @format
 */

import {AppRegistry, StatusBar, useColorScheme, View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { SocketProvider } from './src/socket/Socket';

const Main = () => {
    const colorScheme = useColorScheme();
   const backgroundColor = colorScheme === 'dark' ? '#000' : '#fff'
    return (
       <View style={{ flex: 1, backgroundColor  }}>
         <SocketProvider>
            <StatusBar  barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
            <App />

        </SocketProvider>
       </View>
    );
}

AppRegistry.registerComponent(appName, () => Main);
