import React from 'react'

import { SearchRecipes } from '../components'
import { RecipeList } from './'

const App = () => (
        <div>
            <h2>Recipe Finder</h2>
            <SearchRecipes />
            <RecipeList />
        </div>
)

export default App
