import React, {Component} from 'react';

import './styles/BadgeNew.css'

import header from "../images/badge-header.svg";
import Badge from "../components/Badge.jsx";
import BadgeForm from "../components/BadgeForm.jsx";


class BadgeNew extends Component {
    state={ form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
    }}

    handleChange = e => {
        this.setState({         

            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })

    }


    render() {
        return(
            <div>
                <div className="BadgeNew__hero ">
                    <img className="img-fluid" src={header} alt="logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                jobTitle={this.state.form.jobTitle}
                                twitter={this.state.form.twitter}
                                avatar="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
                            >
                            </Badge>
                        </div>

                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}></BadgeForm>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default BadgeNew;
