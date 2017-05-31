import { render } from "react-dom"
import React from "react"
import { hashHistory } from 'react-router'
import $ from 'jquery'
import AOS from "aos"

import Vision from "./Vision"
import Menu from "./Menu"
import Home from "./Home"
import Team from "./Team"
import Services from "./Services"
import Contacts from "./Contacts"

import text from "../data"

class App extends React.Component {
    constructor( props ) {
        super( props )
        this.state = {
            lang: 'it',
            data: text['it']
        }
        this.changeLanguage = this.changeLanguage.bind(this)
    }
    componentDidMount() {
        //always scroll home on load
        hashHistory.replace("/")
        AOS.init();
        /*window.addEventListener('scroll', this.handleScroll);*/
    }
    changeLanguage(_lang){
        /*console.log(_lang)*/
        this.setState({
            lang: _lang,
            data: text[_lang]
        })
    }
    componentWillReceiveProps(nextProps) {
        //routing
        if(this.props.location.pathname != nextProps.location.pathname){
            switch(nextProps.location.pathname){
                case "/":
                    $('html,body').animate({scrollTop: 0})
                    break;
                case "/team":
                    $('html,body').animate({scrollTop: $("#team").offset().top})
                    break;
                case "/vision":
                    $('html,body').animate({scrollTop: $("#vision").offset().top - 100})
                    break;
                case "/services":
                    $('html,body').animate({scrollTop: $("#services").offset().top})
                    break;
                case "/contacts":
                    $('html,body').animate({scrollTop: $("#contacts").offset().top})
                    break;
                /*default:
                    $('html,body').animate({scrollTop: 0})*/
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
            hashHistory.push("/")
        }
    }*/
    render() {
        return <div>
            <Menu data={this.state.data.menu} changeLanguage={this.changeLanguage}/>
            <Home data={this.state.data.home}/>
            <Team data={this.state.data.team}/>
            <Vision data={this.state.data.vision}/>
            <Services data={this.state.data.services}/>
            <Contacts data={this.state.data.contacts}/>
        </div>
    }
}

export default App