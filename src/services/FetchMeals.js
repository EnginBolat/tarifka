import axios from 'axios';
import MealModel from '../models/Meal.Model'

const FetchMeals = async (setMeals, category, setError, setLoading) => {
    try {
        setLoading(true);
        await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then((response) => {
                var mealList = response.data["meals"].map(meal => new MealModel(
                    meal.idMeal,
                    meal.strMeal,
                    meal.strMealThumb,
                ));
                setMeals(mealList);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setError(error);
            });
    } catch (error) {
        setError(error);
    }
};

export default FetchMeals;