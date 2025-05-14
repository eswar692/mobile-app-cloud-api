import { Button, Text, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/AntDesign';




const toastConfig = {
  
    
  success:({ text1}:any) => (
    <View style={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', height: 60, width: '80%', backgroundColor: 'green', borderLeftWidth: 5, borderLeftColor: 'red', paddingHorizontal: 15 }}>
      <Text style={{ color: 'white' }}>{text1}</Text>
      <TouchableOpacity onPress={() => Toast.hide()}>
        <Icon name="close" size={30}  />
      </TouchableOpacity>
    </View>
  ),
  error:({ text1}:any) => (
    <View style={{ height: 60, width: '100%', backgroundColor: 'red',}}>
      <Text>{text1}</Text>
      <TouchableOpacity onPress={() => Toast.hide()}>
        <Icon name="doubleleft" size={30}  />
      </TouchableOpacity>
    </View>
  ) ,
  
};


export default toastConfig

