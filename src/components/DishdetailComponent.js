import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem, Col, Row, Label, 
    Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const minLen = (val) =>  val && val.length > 2;
const maxLen = (val) => !(val) || val.length <= 15;

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this);
    }
    
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    submitForm(values) {
        this.props.addComment(this.props.dishId, values.rating, values.name, values.comment);
    }


    render() {
        return(
            <>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"> Submit Comment</span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.submitForm(values)} >
                            <Row className="form-group">
                                <Label md={12} htmlFor="rating">Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" id="rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label md={12} htmlFor="name">Your name</Label>
                                <Col md={12}>
                                    <Control.text model=".name" id="name" name="name" className="form-control"
                                        placeholder="Your name" 
                                        validators={{
                                            minLen, maxLen
                                        }} />
                                    <Errors className="text-danger" model=".name" show="touched"
                                        messages={{
                                            minLen: 'Must be greater than 2 characters',
                                            maxLen: 'Must be 15 characters or less' 
                                        }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label md={12} htmlFor="comment">Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment" className="form-control"
                                        rows="6" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Button color="primary" type="submit">Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

function RenderComments({comments, addComment, dishId}) {
        
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
                <br />
                <li>-- {comm.author} {new Intl.DateTimeFormat('en-US', date_format).format(new Date(Date.parse(comm.date)))}</li>
                <br />
            </div>    
        );
    })

    return (
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {comms}
            </ul>
            <CommentForm dishId={dishId} addComment={addComment} />
        </div>
    ); 
}

function RenderDish({dish}) {
    return(
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    ); 
}

const DishDetail = (props) => {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if(props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null){
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
                    <RenderComments comments={props.comments}
                        addComment={props.addComment} dishId={props.dish.id} />
                </div>
            </div>
        );
    } 
}

export default DishDetail;