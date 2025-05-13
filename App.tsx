import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import Toast from "react-native-toast-message"
import toastConfig from "./src/config/toast/toast"
import { Provider } from "react-redux"
import { store } from "./src/redux/Store"
import Main from "./src/Main"



const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1}}>
        <Provider store={store}>
          <Main />
        </Provider>
        <Toast config={toastConfig}/>  
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App