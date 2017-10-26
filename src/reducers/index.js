import { combineReducers } from 'redux'
import recipes from './recipes_reducer'
import favoriteRecipes from './favoriteRecipes_reducer'

const rootReducer = combineReducers({
    recipes,
    favoriteRecipes
})

export default rootReducer
