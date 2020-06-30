import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';

class DishDetail extends Component {

    constructor(props){
        super(props);
    }

    renderComments(comments) {
        const date_format = {
            year: 'numeric',
            month: 'short',
            day: '2-digit'
        }
        if (comments.length !== 0){
            const comms = comments.map((comm) => {
                return (
                    <div key={comm.id}>
                        <ul className="list-unstyled">
                            <li>{comm.comment}</li>
                            <li>-- {comm.author} {new Intl.DateTimeFormat('en-US', date_format).format(new Date(Date.parse(comm.date)))}</li>
                        </ul>
                    </div>
                );
            })
            return (
                <div>
                    <h4>Comments</h4>
                    {comms}
                </div>
            );
        }
        else {
            return (
                <div>

                </div>
            );
        }
    }

    displayDish(dish) {
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        ); 
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.displayDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;