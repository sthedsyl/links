import {Text,View, Pressable} from "react-native";
import "../global.css";

export default function Index() {
  return (
      <View className="bg-white p-4 rounded shadow-md mt-10">
        <Text className="text-lg font-bold">Bem-vindo ao App!</Text>
        <Text className="text-black">Hello World</Text>
        <Pressable className="bg-blue-500 px-4 py-4 rounded mt-4" onPress={() => alert("Botão pressionado!")}>
          <Text className="text-white">Clique aqui!</Text>
        </Pressable>
      </View>
  );
}