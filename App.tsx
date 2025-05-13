import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import Src from "./src/src"
import Toast from "react-native-toast-message"
import toastConfig from "./src/config/toast/toast"



const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1}}>
        <Src />
        <Toast config={toastConfig}/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App