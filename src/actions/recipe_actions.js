import {
    SET_RECIPES,
    FAVORITE_RECIPE
} from './types'

export const setRecipes = items => {
    return {
        type: SET_RECIPES,
        items
    }
}

export const favoriteRecipe = recipe => {
    return {
        type: FAVORITE_RECIPE,
        recipe
    }
}
