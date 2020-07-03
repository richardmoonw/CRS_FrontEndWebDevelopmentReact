import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import '../App.css';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES
        };
    }
  
    render() {

        const HomePage = () => {
            return(
                <Home />
            );
        }
        
        return (
            <div>
                <Header />
                    <Switch>
                        <Route path="/home" component={HomePage} />

                        {/* We pass the Menu component as the return value of an arrow function 
                        because there are props to be passed into it. */}
                        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/> } />
                        <Redirect to="/home" />
                    </Switch>
                <Footer />
            </div>
        );
    } 
}

export default Main;
 