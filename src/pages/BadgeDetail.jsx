import React from 'react';
import ReactDom from 'react-dom';

import { Link } from "react-router-dom";
import './styles/BadgeDetails.css';
import Badge from "../components/Badge.jsx";
import DeleteBadgeModal from "../components/DeleteBadgeModal.jsx";
import confLogo from "../images/platziconf-logo.svg";

function BadgeDetail(props) {


    return(

        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt=" logo e la conferencia"/>
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{props.badge.firstName} {props.badge.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge
                            firstName={props.badge.firstName  || 'FIRST_NAME'}
                            lastName={props.badge.lastName || 'LAST_NAME'}
                            jobTitle={props.badge.jobTitle || 'JOB_TITLE'}
                            twitter={props.badge.twitter || 'TWITTER'}
                            email={props.badge.email}
                            avatarUrl={props.badge.avatarUrl}
                        ></Badge>
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <Link className="btn btn-primary mb-4" to={`/badges/${props.badge.id}/edit`} >Edit</Link>
                            </div>

                            <div>
                                <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                                <DeleteBadgeModal 
                                    isOpen={props.isOpen} 
                                    onClose={props.onCloseModal} 
                                    onDeleteBadge={props.onDeleteBadge}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default BadgeDetail;