import { TouchableOpacity, View } from "react-native"
import GlobalText from "../../global/GlobalText"
import Toast from "react-native-toast-message"

const Login = () => {
  return (
    <View style={{ flex: 1}}>
      <GlobalText>
        Login
      </GlobalText>
      <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }} onPress={() => {Toast.show({type: 'success', text1: 'Login Success'})}}>
        <GlobalText>
          Login
        </GlobalText>
      </TouchableOpacity>

    </View>
  )
}

export default Login