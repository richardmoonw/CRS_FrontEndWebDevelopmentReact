import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderComments({comments}) {
        
    // Variable used for formating the ISO date
    const date_format = {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    }

    const comms = comments.map((comm) => {
        return (
            // The key attribute is used by React to uniquely identify each item that has
            // been rendered in here. (You need to add it whenever you are rendering a list
            // of items).
            <div key={comm.id}>
                <li>{comm.comment}</li>
                <br/>
                <li>-- {comm.author} {new Intl.DateTimeFormat('en-US', date_format).format(new Date(Date.parse(comm.date)))}</li>
                <br/>
            </div>    
        );
    })

    return (
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {comms}
            </ul>
        </div>
    ); 
}

function RenderDish({dish}) {
    return(
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    ); 
}

const DishDetail = (props) => {
    if (props.dish != null){
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">    
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    } 
}

export default DishDetail;