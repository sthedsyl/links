import {Text,View,Image} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import '../global.css'; 


export default function Index() {
  return (
      <View className="container bg-gray-950 flex-1 pt-20">
        <View className="header pl-6  ">
          <Image source={require('../assets/logo.png')} className="w-12 h-12" />
        </View>
      </View>
  );
}