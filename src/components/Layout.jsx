import React, {Fragment} from 'react';

import Navbar from './Navbar.jsx';



function Layout(props) {

    return(
        <Fragment>
            <Navbar></Navbar>
            {props.children}  
        </Fragment>
    )  
    
}

export default Layout;