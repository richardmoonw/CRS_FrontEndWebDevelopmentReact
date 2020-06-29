import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent'

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }

        console.log('Menu Component Constructor is invoked')
    }

    componentDidMount() {
        console.log('Menu Component didMount is invoked')
    }

    onDishSelect(dish) {
        this.setState({ selectedDish:dish })
    }

    renderDish(selectedDish) {
        if (selectedDish != null) {
            return (
                <DishDetail dish={selectedDish} />
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

        console.log('Menu Component render is invoked')
        const menu = this.props.dishes.map((dish) => {
            return (
                // The key attribute is used by React to uniquely identify each item that has
                // been rendered in here. (You need to add it whenever you are rendering a list
                // of items).
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                {this.renderDish(this.state.selectedDish    )}
            </div>
        );
    }
}

export default Menu;