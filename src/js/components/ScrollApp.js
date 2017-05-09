import { render } from "react-dom";
import React from "react";
import Vision from "./Vision"

class ScrollApp extends React.Component {
    render() {
        return <div className="app">
                <div className="section menu"></div>
                <div id="home" className="section home"></div>
                <div id="team" className="section team"></div>
                <Vision/>
                <div id="contacts" className="section contacts"></div>
            </div>
    }
}
export default ScrollApp