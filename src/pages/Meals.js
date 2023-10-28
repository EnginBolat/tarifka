import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import MealList from '../components/List/MealList';
import FetchMeals from '../services/FetchMeals'
import Loading from '../components/Loading/index';
import Error from '../components/Error/index';

export default function Meals({ route, navigation }) {
    let category = route.params.category;
    const [meals, setMeals] = React.useState([]);
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        FetchMeals(setMeals, category, setError, setLoading);
    }, [category]);

    if (error != '') {
        return (<Error />)
    }

    if (loading) {
        return (<Loading />);
    }

    return (
        <SafeAreaView style={styles.container}>
            <MealList data={meals} navigation={navigation} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FA9D24',
    },
});