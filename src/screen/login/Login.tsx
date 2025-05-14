import { TouchableOpacity, View } from "react-native"
import GlobalText from "../../global/GlobalText"
import Toast from "react-native-toast-message"
import Config from "react-native-config"

const Login = () => {
  const api = Config.API_URL;
  console.log(api);
  return (
    <View style={{ flex: 1}}>
      <GlobalText style={{fontFamily: 'Poppins-Bold'}}>
        Login
      </GlobalText>
      <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 10 }} onPress={() => {Toast.show({type: 'success', text1: 'Login Success'})}}>
        <GlobalText>
          Login
        </GlobalText>
      </TouchableOpacity>

    </View>
  )
}

export default Login