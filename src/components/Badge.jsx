import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import './styles/Badge.css'
import '../global.css'


import badgeHeader from '../images/badge-header.svg';

class Badge extends Component {

    render() {
			return (
				<div className="Badge">
					<div className="Badge__header">
						<img src={badgeHeader} alt="lodo"/>
					</div>

					<div className="Badge__section-name">
						<img className="Badge__avatar" src={this.props.avatar} alt="avatar"/>
						<h1> {this.props.firstName}
							<br/> 
							{this.props.lastName}
						</h1>
					</div>

					<div className="Badge__section-info">
						<h3> {this.props.jobTitle}
						</h3>
						<div> @{this.props.twitter}
						</div>
					</div>

					<div className="Badge__footer">
						@platziConf
					</div>
				</div>
				
			)
    }
}

export default Badge;