import {Text,View,Image, TouchableOpacity} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";

import { colors } from "../styles/colors";
import '../global.css'; 

import {Category} from "@/src/components/category";

export default function Index() {
  return (
      <View className="container bg-gray-950 flex-1 pt-20">
        <View className="header pl-6 w-full flex-row justify-between items-center"> 
          <Image source={require('../assets/logo.png')} className="w-12 h-12" />
          <TouchableOpacity>
            <MaterialIcons name="add" size={32} color={colors.green[300]} />
          </TouchableOpacity>
        </View>

        <Category name="Projeto" icon="code" isSelected  />
        <Category name="Site" icon="language" isSelected={false} />
        <Category name="Vídeo" icon="movie" isSelected= {false} />
      </View>
  );
}