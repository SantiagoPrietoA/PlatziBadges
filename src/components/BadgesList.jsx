import React, {Component} from 'react';

import { Link } from "react-router-dom";

import './styles/BadgesList.css'

function useFilterBadges(badges) {
	const [query, setQuery] = React.useState('')
	const [badgesFilter, setBadgesFilter] = React.useState(badges)


	React.useMemo(() => {
		const result = badges.filter(badge => {
			return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
		})

			setBadgesFilter(result)
	}, [badges, query])

	return [query, setQuery, badgesFilter]

	
}

function BadgesList (props) {

	const badges = props.badges;

	const [query, setQuery, badgesFilter] = useFilterBadges(badges)

	


	if( badgesFilter.length === 0) {
		return(
			<div>
				<div className="form-group">
					<label htmlFor="">Filter badge</label>
					<input 
						type="text" 
						className="form-control"
						value={query}
						onChange= {(e) => {setQuery(e.target.value)}}
					/>
				</div>
				<h3>No badges were found</h3>
				<Link className="btn btn-primary" to="/badges/new">Create new badge</Link>
			</div>
		)
	}

	return(

			<div className="BadgesList">
				<div className="Badges__container">
					<div className="form-group">
						<label htmlFor="">Filter badge</label>
						<input 
							type="text" 
							className="form-control"
							value={query}
							onChange= {(e) => {setQuery(e.target.value)}}
						/>
					</div>
					<ul className="list__unstyled ">
						{badgesFilter.map((badge) => {
							return(
								<Link key={badge.id} className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
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

export default BadgesList;
