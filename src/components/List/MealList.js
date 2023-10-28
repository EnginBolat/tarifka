import React from "react";
import { FlatList, View } from 'react-native';
import MealCard from '../Card/MealCard/index';


const MealList = ({ data, navigation }) => {
    const renderItem = ({ item }) => <MealCard item={item} onPressed={() => navigation.push('Details', { value: item.idMeal })} />;

    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.idMeal.toString()}
                renderItem={renderItem}
            />
        </View>
    );
}

export default MealList;