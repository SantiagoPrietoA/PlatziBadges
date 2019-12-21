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
						<img className="Badge__avatar" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg" alt="avatar"/>
						<h1> Santiago
							<br/> 
							Prieto
						</h1>
					</div>

					<div className="Badge__section-info">
						<h3> Frontend developer
						</h3>
						<div> @SantiagoP
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