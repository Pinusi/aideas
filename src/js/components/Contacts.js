import { render } from "react-dom";
import React from "react";

class Contacts extends React.Component {
    render(){
        return <section id="contacts" className="contacts">
                <div className="centralize">
                    <div className="title">Contatti</div>
                    <div className="txt"><b>® AIDEAS LTD</b><br></br><a href="mailto:info@aideas.com">info@aideas.com</a><br></br>Tel. 02012345678<br></br>London, UK</div>
                </div>
            </section>
    }
}

export default Contacts