import React, {Component} from 'react';

import './styles/BadgeNew.css'

import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge.jsx";
import BadgeForm from "../components/BadgeForm.jsx";
import Loader from "../components/Loader.jsx";
import md5 from 'md5';


import api from '../api'


class BadgeNew extends Component {
    state={ 
        isLoading: false,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
            avatarUrl: '',
        }
    }

    handleChange = e => {

        const email = this.state.form.email;
        const hash = md5(email);
        this.setState({         

            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
                avatarUrl: `https://www.gravatar.com/avatar/${hash}?d=identicon`
            }
        })


    }

    handleSubmit = async e => {
        e.preventDefault()

        this.setState({isLoading: true, error: null})

        try {
            await api.badges.create(this.state.form)
            // console.log(this.state.form);
            this.setState({isLoading: false})

            this.props.history.push('/badges')

        } catch (error) {
            console.log(error.message);

            this.setState({isLoading: false, error: error})
            
        }
    }


    render() {
        if( this.state.isLoading) {
            return <Loader></Loader>
        }
        return(
            <div>
                <div className="BadgeNew__hero ">
                    <img className="img-fluid BadgeNew__hero-image" src={header} alt="logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName  || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                twitter={this.state.form.twitter || 'TWITTER'}
                                email={this.state.form.email}
                                avatarUrl={this.state.form.avatarUrl}
                            >
                            </Badge>
                        </div>

                        <div className="col-6">
                            <BadgeForm 
                                onSubmit={this.handleSubmit} 
                                onChange={this.handleChange} 
                                formValues={this.state.form}
                                error={this.state.error}
                                titleForm="New Attendant"
                            >
                            </BadgeForm>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default BadgeNew;
