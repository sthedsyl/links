import {Text, Pressable,  PressableProps} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import { colors } from "@/src/styles/colors";

type Props = PressableProps & {
    name: string;
    isSelected: boolean;
    icon: keyof typeof MaterialIcons.glyphMap;
}

export function Category({name, icon, isSelected, ...rest}: Props) {
    const color = isSelected ? colors.green[300] : colors.gray[400];
    return (
        <Pressable className="container flex-row items-center gap-5" {...rest}>
            <MaterialIcons name={icon} size={16} color={color} />
            <Text className="name text-2xl font-semibold" style={{ color }}>{name}</Text>
        </Pressable>
    )
}
