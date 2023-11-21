import React from 'react';
import { Form, Container, Col } from 'react-bootstrap';
import theCat from '../../img/chabongimg.jpg'
import './login.css'

export default function Login(){
    return (
        <div className = "SignUp-Button">
        <Container>
                <Col className="Col-1">
                  <div className="home">
                  
                  <a href="/"  role="button" aria-pressed="true"> Home</a>
                  </div>
                  <div className="thePeople">
                      <img src={theCat} alt="thePeople" />
                  </div>
                    
                </Col>

                <Col className="Col-2">
                  <div className="signupTitle">
                        <h1 className="CL">Join </h1>
                    </div>
                    <Form className="signUp-from">
                        <Form.Group className="formBasicName">
                            <Form.Label className="">Your name</Form.Label>
                            <Form.Control placeholder="Enter name" 
                                required/>
                        </Form.Group>
                        <Form.Group className="formBasicUsername">
                            <Form.Label className="">Username</Form.Label>
                            <Form.Control placeholder="Enter username" 
                                required/>
                            <Form.Text className="text-muted">
                                Your username cannot contain the following special characters: !, @, #, $, %. ^, &, *, ( , ),., =, +, ]
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="formBasicEmail">
                            <Form.Label className="">Your email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email" 
                                required/>
                        </Form.Group>
                        <Form.Group className="formBasicPassword">
                            <Form.Label className="">Your password</Form.Label>
                            <Form.Control type="password" placeholder="Password" 
                              required/>
                        </Form.Group>
                        <Form.Group className="formBasicConfirmPassword">
                            <Form.Label className="">Confirm password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm password" 
                              required
                              />
                            <Form.Text className="text-warning">
                                ddkdkdkd
                            </Form.Text>
                        </Form.Group>
                        <div className="btnContinue">
                            <button className="SW" type="submit">
                                Continue
                            </button>
                        </div>
                    </Form>
                </Col>
        </Container>
        
    </div>
    );
};
