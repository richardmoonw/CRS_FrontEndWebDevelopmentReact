import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


// We enclose the arguments within brackets because they are part ob an object
function RenderMenuItem({ dish, onClick}) {
    return (
        <Card onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            // The key attribute is used by React to uniquely identify each item that has
            // been rendered in here. (You need to add it whenever you are rendering a list
            // of items).
            <div key={dish.id} className="col-12 col-md-5 m-1">
               <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;