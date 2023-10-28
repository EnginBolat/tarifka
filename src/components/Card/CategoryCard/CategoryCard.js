import React from "react";
import styles from "./CategoryCard.style";
import { View, Text, Image, TouchableOpacity } from "react-native"

const CategoryCard = ({ item, onPressed }) => {
    return (
        <TouchableOpacity onPress={onPressed} >
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: item.strCategoryThumb }} />
                <Text style={styles.title}>{item.strCategory}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default CategoryCard;