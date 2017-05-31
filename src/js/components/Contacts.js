import { render } from "react-dom";
import React from "react";

class Contacts extends React.Component {
    render(){
        const { data } = this.props

        return <section id="contacts" className="contacts">
                <div className="centralize">
                    <div className="title">{data.txt_title}</div>
                    <div className="txt"><b>® AIDEAS LTD</b><br></br><a href="mailto:info@aideas.com">info@aideas.ai</a><br></br>London, UK<br></br>Madrid, ES<br></br>Milano, IT</div>
                </div>
            </section>
    }
}

export default Contacts