import React, { Component } from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setRecipes } from '../actions/recipe_actions'

class SearchRecipes extends Component {
    constructor() {
        super()

        this.state = {
            ingredients: '',
            dish: ''
        }
    }

    search() {
        let { ingredients, dish } = this.state
        const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`
        
        fetch(url, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => {
                this.props.setRecipes(json.results)
            })
        
    }

    handleChangeIngredients = event => this.setState({ ingredient: event.target.value })

    handleChangeDish = event => this.setState({ dish: event.target.value })

    handleClick = () => this.search()

    render() {
        return (
            <Form inline>
                <FormGroup>
                    <ControlLabel>Ingredients</ControlLabel>
                    {' '}
                    <FormControl
                        type="text"
                        placeholder="garlic, chicken"
                        onChange={this.handleChangeIngredients} />
                </FormGroup>
                {' '}
                <FormGroup>
                    <ControlLabel>Dish</ControlLabel>
                    {' '}
                    <FormControl
                        type="text"
                        placeholder="adobo"
                        onChange={this.handleChangeDish} />
                </FormGroup>
                <Button onClick={this.handleClick}>Submit</Button>
            </Form>
        );
    }
}

export default connect(null, { setRecipes })(SearchRecipes)
