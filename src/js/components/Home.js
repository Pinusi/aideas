import { render } from "react-dom";
import React from "react";

import logo from '../../assets/images/logo_big.png'
import nodes from '../../assets/images/nodes.png'
import bulbs from '../../assets/images/bulbs.png'
import ai_icon from '../../assets/images/artificial_intelligence.png'
import money_icon from '../../assets/images/money.png'
import people_icon from '../../assets/images/people.png'
import slogan from '../../assets/images/slogan.png'
import mail_icon from '../../assets/images/mail_icon.png'
import twitter_icon from '../../assets/images/twitter_icon.png'

class Home extends React.Component {
    render(){
        const { data } = this.props

        return <section id="home" className="home">
            <img className="logo" src={logo}/>
            <img className="nodes" src={nodes}/>
            <div className="top_slogan">put AI into business<i>.</i></div>
            <div className="social_links">
                <a href="mailto:info@aideas.ai"><img src={mail_icon}/></a>
                <a href="https://twitter.com/aideasadvisory"><img src={twitter_icon}/></a>
            </div>
            <div className="yellow_section">
                <div className="row">
                    <div className="col-md-6 txt">
                        <div className="title">_ aideas</div>
                        <div className="subtitle">{data.txt_yellow}<i>.</i></div>
                    </div>
                    <div className="col-md-6">
                        <img src={bulbs}/>
                    </div>
                </div>
            </div>
            <div className="row description">
                    <div className="col-md-6 align-right">
                        <span className="number">3</span>
                        <span className="areas">{data.txt_vertical}</span>
                    </div>
                    <div className="col-md-6 desc" dangerouslySetInnerHTML={{__html: data.main_txt}}></div>
                </div>
                <div className="row points">
                    <div className="col-md-4">
                        <img className="ai_icon" src={ai_icon}/>
                        <div className="title">{data.point_1_label}</div>
                        <div className="txt">{data.point_1_txt}</div>
                    </div>
                    <div className="col-md-4">
                        <img className="money_icon" src={money_icon}/>
                        <div className="title">{data.point_2_label}</div>
                        <div className="txt">{data.point_2_txt}</div>
                    </div>
                    <div className="col-md-4">
                        <img className="people_icon" src={people_icon}/>
                        <div className="title">{data.point_3_label}</div>
                        <div className="txt">{data.point_3_txt}</div>
                    </div>
                </div>
                <img className="slogan" src={slogan}/>
        </section>
    }
}

export default Home