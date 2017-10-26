import { FAVORITE_RECIPE } from '../actions/types'

const favoriteRecipes = (state = [], action) => {
    switch (action.type) {
        case FAVORITE_RECIPE:
            state = [...state, action.recipe]
            return state

        default:
            return state
    }
}


export default favoriteRecipes
