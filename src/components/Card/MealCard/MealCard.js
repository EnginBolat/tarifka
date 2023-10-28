import React from "react";
import styles from "./MealCard.style";
import { View, Text, Image, TouchableOpacity } from "react-native"


const MealCard = ({ item, onPressed }) => {
    return (
        <TouchableOpacity onPress={onPressed}>
            <View style={styles.container}>
                <Image source={{ uri: item.strMealThumb }} style={styles.image} />
                <View style={styles.subContainer}>
                    <Text style={styles.title}>{item.strMeal}</Text>
                </View>
            </View>
        </TouchableOpacity >
    );
}

export default MealCard;