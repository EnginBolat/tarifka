import axios from 'axios';
import DetailsModel from '../models/Details.Model'

async function fetchDetails(setDetails, id, setLoading, setError) {
    try {
        setLoading(true);
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((response) => {
                let mealDetails = response.data["meals"].map(details => new DetailsModel(
                    details.idMeal,
                    details.strArea,
                    details.strInstructions,
                    details.strMeal,
                    details.strMealThumb,
                    details.strYoutube,
                ));
                setDetails(mealDetails);
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

export default fetchDetails;