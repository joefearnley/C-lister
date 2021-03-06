import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../../api';
import config from "../../config";
import { withRouter } from 'react-router';
import Navigation from '../Navigation';
import { 
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    FormInput,
    FormFeedback 
} from "shards-react";

class Signup extends Component {
    constructor(props, context) {
        super(props);

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            username: '',
            email: '',
            password: '',
            showUsernameError: false,
            showEmailError: false,
            showPasswordError: false,
            showNonFieldError: '',
            nonFieldErrorMessage: '',
        };
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    handleOpen = e => {
        e.preventDefault();
        this.setState({ open: true });
    }

    updateEmail = e => {
        if (e.target.value !== '') {
            this.setState({
                username: e.target.value,
                email: e.target.value,
                showEmailError: false
            });
        }
    }

    updatePassword = e => {
        if (e.target.value !== '') {
            this.setState({ 
                password: e.target.value,
                showPasswordError: false
            });
        }
    }

    submitForm = e => {
        e.preventDefault();
        this.setState({ showError: false });

        apiClient.post(`${config.API_URL}/account/`, {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        })
        .then(res => {
            localStorage.setItem('auth_token', res.data.token);
            this.props.history.push('/list');
        })
        .catch(err => {
            if (err.response) {
                if (err.response.data.email) {
                    this.setState({ showEmailError: true })
                }

                if (err.response.data.password) {
                    this.setState({ showPasswordError: true })
                }


                this.setState(() => ({ 
                    showNonFieldError: true,
                    nonFieldErrorMessage: err.response.data.non_field_errors
                }));
            }
        });
    }

    render() {
        return (
            <div>
                <Navigation />
                <Container>
                    <Row className="justify-content-md-center">
                        <Col sm="8">
                            <h3 className="mb-4">Sign up for an Account</h3>
                            <Form>
                                <FormGroup>
                                    <label htmlFor="email">Email address</label>
                                    <FormInput invalid={ this.state.showEmailError } id="email" type="email" onChange={this.updateEmail} />
                                    <FormFeedback className="text-danger">Please enter valid email address.</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <label htmlFor="email">Password</label>
                                    <FormInput invalid={ this.state.showPasswordError } id="password" type="password" onChange={this.updatePassword} />
                                    <FormFeedback type="invalid">Please enter a password</FormFeedback>
                                </FormGroup>
                            </Form>

                            <p className={this.state.showNonFieldError ? 'show-error' : 'hide-error'}>
                                { this.state.nonFieldErrorMessage }
                            </p>

                            <Button className="mr-2" theme="primary" onClick={this.submitForm}>Sign up</Button>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col sm="8">
                            <p className="aleady-a-user">
                                Already have an account? <Link to={`/login`} className="sign-up">Log in</Link>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default withRouter(Signup);
