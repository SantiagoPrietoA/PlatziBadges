import React, {Component} from 'react';

import './styles/BadgesList.css'

class BadgesList extends Component {

    render() {
        return(

            <div className="BadgesList">
                        <div className="Badges__container">
                            <ul className="list__unstyled ">
                                {this.props.badges.map((badge) => {
                                    return(
                                        <li key={badge.id} className="BadgesListItem">
                                            <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt="avatar"/>
                                            <div className="ml-2">
                                                <p >{badge.firstName} {badge.lastName}</p>
                                                <p>{badge.jobTitle}</p>
                                                <p>@{badge.twitter}</p>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
        )
    }
}

export default BadgesList;
