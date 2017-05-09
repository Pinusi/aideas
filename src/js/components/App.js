import { render } from "react-dom";
import React from "react";
import { hashHistory } from 'react-router';
import $ from 'jquery'

import Vision from "./Vision"
import Menu from "./Menu"
import Home from "./Home"
import Team from "./Team"
import Contacts from "./Contacts"

class App extends React.Component {
    componentDidMount() {
        //always scroll home on load
        hashHistory.replace("/")
        /*window.addEventListener('scroll', this.handleScroll);*/
    }
    componentWillReceiveProps(nextProps) {
        //routing
        if(this.props.location.pathname != nextProps.location.pathname){
            switch(nextProps.location.pathname){
                case "/team":
                    $('html,body').animate({scrollTop: $("#team").offset().top})
                    break;
                case "/vision":
                    $('html,body').animate({scrollTop: $("#vision").offset().top})
                    break;
                case "/contacts":
                    $('html,body').animate({scrollTop: $("#contacts").offset().top})
                    break;
                default:
                    $('html,body').animate({scrollTop: 0})
            }
        }
    }
    /*handleScroll(){
        let our_position = $(document).scrollTop()
        let team_limit = $("#team").offset().top
        let vision_limit = $("#vision").offset().top
        let contacts_limit = $("#contacts").offset().top

        if(our_position > team_limit){
            hashHistory.push("team")
        }
        else if(our_position > vision_limit){
            hashHistory.push("team")
        }
        else if(our_position > contacts_limit){
            hashHistory.push("contacts")
        }
        else{

        }
    }*/
    render() {
        return <div>
            <Menu/>
            <Home/>
            <Team/>
            <Vision/>
            <Contacts/>
        </div>
    }
}

export default App