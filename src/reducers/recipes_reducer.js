import { SET_RECIPES } from '../actions/types'

const recipes = (state = [], action) => {
    switch (action.type) {
        case SET_RECIPES:
            return action.items

        default:
            return state
    }
}

export default recipes
