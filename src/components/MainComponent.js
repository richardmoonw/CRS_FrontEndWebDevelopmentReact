import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent'

class Main extends Component{

    constructor(props) {
        super(props);

        this.state = {
        dishes: DISHES,
        selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish:dishId })
    }

    renderDish(selectedDish) {
        if (selectedDish != null) {
            return (
                <DishDetail 
                    // The filter function returns an array with all the elements that
                    // satisfy the given condition, but since we only need 1 element
                    // and we are sure that that the dishId is unique we retrieve 
                    // the first element of the array.
                    dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            );    
        }
        else {
            return (
                <div>

                </div>
            );
        }
    }
  
    render() {
        return (
            <div>
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Hello World</NavbarBrand>
                </div>
                </Navbar>
                <Menu dishes={this.state.dishes} 
                    onClick={(dishId) => this.onDishSelect(dishId)}/>
                {this.renderDish(this.state.selectedDish)}
            </div>
        );
    } 
}

export default Main;
 