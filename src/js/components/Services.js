import { render } from "react-dom";
import React from "react";

import mix from '../../assets/images/mix.jpg'

class Services extends React.Component {
    render(){
        const { data } = this.props

        return <section id="services" className="services">
            <div className="section_title">
                <div className="title">{data.txt_title}</div>
                <br></br>
                <div className="subtitle">{data.txt_subtitle}</div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="txt_3" dangerouslySetInnerHTML={{__html: data.txt_main}}></div>
                </div>
                <div className="col-md-6"><img className="mix" src={mix}/></div>
            </div>
            <div className="row txt_1">
                <div className="col-md-12" dangerouslySetInnerHTML={{__html: data.txt_secondary}}></div>
            </div>
        </section>
    }
}

export default Services