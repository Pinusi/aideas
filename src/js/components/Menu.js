import { render } from "react-dom";
import React from "react";
import { Link } from 'react-router';

import logo from '../../assets/images/logo.png'
import world_icon from '../../assets/images/world_icon.png'

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpened: false,
            langOpened: false
        }
        this.toggleMenu = this.toggleMenu.bind(this)
        this.toggleLanguage = this.toggleLanguage.bind(this)
    }
    toggleMenu(){
        if(this.state.menuOpened){
            this.setState({menuOpened: false})
        }
        else{
            this.setState({menuOpened: true})
        }
    }
    toggleLanguage(){
        if(this.state.langOpened){
            this.setState({langOpened: false})
        }
        else{
            this.setState({langOpened: true})
        }
    }
    render(){
        const { data, changeLanguage } = this.props

        return <section id="menu" className="menu">
            <div className="wide-menu">
                <div className="float_right">
                    {data.map(button =>
                        <Link key={button.txt} to={button.link} activeClassName="active">{button.txt}</Link>
                    )}
                    <span className="lang" onClick={this.toggleLanguage}><img src={world_icon}/>
                        <ul className={(this.state.langOpened ? 'active' : '')}>
                            <li onClick={() => changeLanguage("it")}>it</li>
                            <li onClick={() => changeLanguage("eng")}>eng</li>
                            <li onClick={() => changeLanguage("es")}>es</li>
                        </ul>
                    </span>
                    <span className="logo"><img src={logo}/></span>
                </div>
            </div>
            <div className="mobile-menu">
                <div className="nav">
                    <div id="nav-icon2" onClick={this.toggleMenu} className={this.state.menuOpened ? 'open' : ''}>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                    </div>
                    <span className="lang" onClick={this.toggleLanguage}><img src={world_icon}/>
                        <ul className={(this.state.langOpened ? 'active' : '')}>
                            <li onClick={() => changeLanguage("it")}>it</li>
                            <li onClick={() => changeLanguage("eng")}>eng</li>
                            <li onClick={() => changeLanguage("es")}>es</li>
                        </ul>
                    </span>
                    <span className="logo"><img src={logo}/></span>
                </div>
                <div className="mobile-menu-content" className={"mobile-menu-content" + (this.state.menuOpened ? ' open' : '')}>
                    {data.map(button =>
                        <div key={button.txt} className="link-container"><Link to={button.link} activeClassName="active">{button.txt}</Link></div>
                    )}
                </div>
            </div>
        </section>
    }
}

export default Menu