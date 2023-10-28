import React from "react";
import { FlatList, View } from 'react-native';
import CategoryCard from '../Card/CategoryCard/index';


const CategoryList = ({ data, navigation }) => {

    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.idCategory}
                renderItem={({ item }) => <CategoryCard item={item} onPressed={() => navigation.push('Meals', { category: item.strCategory })} />}
            />
        </View>
    );
}

export default CategoryList;