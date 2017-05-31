import { render } from "react-dom";
import React from "react";

import lens from '../../assets/images/lens.jpg'

class Vision extends React.Component {
    render(){
        const { data } = this.props

        return <section id="vision" className="vision">
            <div className="section_title">
                <div className="title">{data.txt_title}</div>
                <br></br>
                <div className="subtitle">{data.txt_subtitle}</div>
            </div>
            <div className="row txt_1">
                <div className="col-md-12" dangerouslySetInnerHTML={{__html: data.txt_main}}></div>
            </div>
            <div className="row">
                <img className="lens" src={lens}/>
                <div className="highlight">
                    <div className="txt_ye" dangerouslySetInnerHTML={{__html: data.txt_highlight}}></div>
                </div>
            </div>
        </section>
    }
}

export default Vision