import React, {Component} from 'react';

import { Link } from "react-router-dom";

import './styles/BadgesList.css'

class BadgesList extends Component {

    render() {
        if( this.props.badges.length === 0) {
            return(
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">Create new badge</Link>
                </div>
            )
        }

        return(

            <div className="BadgesList">
                        <div className="Badges__container">
                            <ul className="list__unstyled ">
                                {this.props.badges.map((badge) => {
                                    return(
                                        <Link key={badge.id} className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                                            <li  className="BadgesListItem">
                                                <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt="avatar"/>
                                                <div className="ml-2">
                                                    <p >{badge.firstName} {badge.lastName}</p>
                                                    <p>{badge.jobTitle}</p>
                                                    <p>@{badge.twitter}</p>
                                                </div>
                                            </li>
                                        </Link>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
        )
    }
}

export default BadgesList;
