import { render } from "react-dom";
import React from "react";
import { Link } from 'react-router';

import logo from '../../assets/images/logo.png'

class Menu extends React.Component {
    render(){
        return <section id="menu" className="menu">
            <div className="float_right">
                <Link to="/" activeClassName="active">Home</Link>
                <Link to="team" activeClassName="active">Team</Link>
                <Link to="vision" activeClassName="active">Vision</Link>
                <Link to="contacts" activeClassName="active">Contatti</Link>
                <span className="logo"><img src={logo}/></span>
            </div>
        </section>
    }
}

export default Menu