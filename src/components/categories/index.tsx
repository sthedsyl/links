import {categories} from "@/src/utils/categories";
import {Category} from "@/src/components/category";

import { FlatList } from "react-native";


export function Categories() {
    return (
    
        <FlatList className="container h-52 max-h-52 px-24 "
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Category name={item.name} icon={item.icon} isSelected={false} />}
            horizontal
        />
       
    );
    }


    