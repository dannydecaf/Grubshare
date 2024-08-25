import axios from 'axios';
import { apiKey } from '../src/constants';

const apiBaseUrl = 'https://api.spoonacular.com';
const featuredRecipesEndpoint = `${apiBaseUrl}/recipes/random?number=3&apiKey=${apiKey}`;
const popularRecipesEndpoint = (offset) => `${apiBaseUrl}/recipes/complexSearch?sort=popularity&offset=${offset}&number=10&apiKey=${apiKey}`;
const similarRecipesEndpoint = (id) => `${apiBaseUrl}/recipes/${id}/similar?apiKey=${apiKey}`;
const healthyRecipesEndpoint = (offset) => `${apiBaseUrl}/recipes/complexSearch?apiKey=${apiKey}&sort=healthiness&offset=${offset}&number=10`;
const budgetFriendlyRecipesEndpoint = (maxPrice, offset) => `${apiBaseUrl}/recipes/complexSearch?maxPricePerServing=${maxPrice}&offset=${offset}&number=10&apiKey=${apiKey}`;
const lowCalorieRecipesEndpoint = (offset) => `${apiBaseUrl}/recipes/complexSearch?apiKey=${apiKey}&maxCalories=400&offset=${offset}&number=10`;
const ingredientDetailsEndpoint = (id) => `${apiBaseUrl}/food/ingredients/${id}/information?amount=1&apiKey=${apiKey}`;
const recipesByIngredientEndpoint = (ingredientName) => `${apiBaseUrl}/recipes/findByIngredients?ingredients=${ingredientName}&number=10&apiKey=${apiKey}`;
const searchRecipesEndpoint = (query, offset = 0) => `${apiBaseUrl}/recipes/complexSearch?query=${query}&offset=${offset}&number=20&apiKey=${apiKey}`;

const apiCall = async (endpoint, params) => {
    const options = {
        method: 'GET',
        url: endpoint,
        params: params ? params : {}
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        return {};
    }
};

export const fetchFeaturedRecipes = () => {
    return apiCall(featuredRecipesEndpoint);
}

export const fetchPopularRecipes = (offset = 0) => {
    return apiCall(popularRecipesEndpoint(offset));
}

export const fetchHealthyRecipes = (offset = 0) => {
    return apiCall(healthyRecipesEndpoint(offset));
};

export const fetchBudgetFriendlyRecipes = (maxPrice, offset = 0) => {
    return apiCall(budgetFriendlyRecipesEndpoint(maxPrice, offset));
};

export const fetchLowCalorieRecipes = (offset = 0) => {
    return apiCall(lowCalorieRecipesEndpoint(offset));
};

export const fetchRecipeDetails = (id) => {
    return apiCall(recipeDetailsEndpoint(id));
};

export const fetchSimilarRecipes = (id) => {
    return apiCall(similarRecipesEndpoint(id));
};

export const fetchIngredientDetails = (id) => {
    return apiCall(ingredientDetailsEndpoint(id));
};

export const fetchRecipesByIngredient = (ingredientName) => {
    return apiCall(recipesByIngredientEndpoint(ingredientName));
};

export const searchRecipes = (query, offset = 0) => {
    return apiCall(searchRecipesEndpoint(query, offset));
}
