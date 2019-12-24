import React, {Component} from 'react';
import { Link } from "react-router-dom";


import BadgesList from '../components/BadgesList.jsx';
import Loader from '../components/Loader.jsx';
import logo from '../images/badge-header.svg';

import './styles/Badges.css'
import api from "../api";



class Badges extends Component {

    state= {
        isLoading: true,
        data: [],
        error: null,
    }

    componentDidMount() {

        this.apifetch()

    }

    apifetch = async () => {
      this.setState({ isLoading: true, error: null})

      try {
        const data = await api.badges.list()
        this.setState({ isLoading: false, data: data})
        
      } catch (error) {

        this.setState({ isLoading: false, error: error})        
      }

    }


    render() {

      if(this.state.isLoading) {
        return(
            <Loader></Loader>
        ) 
      }

      if(this.state.error) {
        return `Error ${this.state.error.message}`
      }
        return(
            <div>

              <div className="Badges">
                <div className="Badges__hero">
                  <div className="Badges__container">
                    <img
                      className="Badges_conf-logo"
                      src={logo}
                      alt="Conf Logo"
                    />
                  </div>
                </div>
              </div>

              <div className="Badges__container">
                <div className="Badges__buttons">
                  <Link to="/badges/new" className="btn btn-primary">
                    New Badge
                  </Link>
                </div>

                <BadgesList badges={this.state.data} />
              </div>
            </div>
        )
    }
}

export default Badges;