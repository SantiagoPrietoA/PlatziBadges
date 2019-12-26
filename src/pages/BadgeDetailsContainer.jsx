import React, {Component} from 'react';

import Loader from "../components/Loader.jsx";
import api from '../api'

import BadgeDetail from './BadgeDetail.jsx';



class BadgeDetailsContainer extends Component {

    state= {
        isLoading: true,
        error: null,
        data: [],
        isModalOpen: false,
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ isLoading: true, error: null})
        const badgeId = this.props.match.params.badgeId;

        try {
            const data = await api.badges.read(badgeId)
            this.setState({ isLoading: false, data: data})
            
        } catch (error) {
            this.setState({ isLoading: false, error: error})        
        }        
    }

    handleDeleteBadge = async () => {
        this.setState({ isLoading: true, error: null})
        const badgeId = this.props.match.params.badgeId;

        try {
            await api.badges.remove(badgeId)
            this.setState({ isLoading: false})
            this.props.history.push('/badges');
            
        } catch (error) {
            this.setState({ isLoading: false, error: error})        
        }        
    }

    handleOpen = () => {
        this.setState({isModalOpen: true})
        console.log('open');
    }

    handleClose = () => {
        this.setState({isModalOpen: false})
        console.log('close');
    }



    render() {
        if( this.state.isLoading) {
            return <Loader></Loader>
        }

        return(
            <BadgeDetail 
                isOpen={this.state.isModalOpen}
                onCloseModal={this.handleClose}
                onOpenModal={this.handleOpen} 
                badge={this.state.data}
                onDeleteBadge={this.handleDeleteBadge}
                ></BadgeDetail>

        )
    }
}

export default BadgeDetailsContainer;