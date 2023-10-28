import axios from 'axios';
import CategoryModel from '../models/Category.Model'

const fetchCategories = async (setCategories, setLoading, setError) => {
  try {
    setLoading(true);
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
    let categoryList = response.data["categories"].map(category => new CategoryModel(
      category.idCategory,
      category.strCategory,
      category.strCategoryThumb,
      category.strCategoryDescription
    ));
    setCategories(categoryList);
    setLoading(false);
  } catch (error) {
    setError(error);
  }
};

export default fetchCategories;