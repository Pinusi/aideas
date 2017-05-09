import { render } from "react-dom";
import React from "react";

import logo from '../../assets/images/logo_big.png'
import bulbs from '../../assets/images/bulbs.png'
import ai_icon from '../../assets/images/artificial_intelligence.png'
import money_icon from '../../assets/images/money.png'
import people_icon from '../../assets/images/people.png'
import slogan from '../../assets/images/slogan.png'
import mail_icon from '../../assets/images/mail_icon.png'

class Home extends React.Component {
    render(){
        return <section id="home" className="home">
            <img className="logo" src={logo}/>
            <div className="social_links">
                <a href="mailto:info@aideas.com"><img src={mail_icon}/></a>
            </div>
            <div className="yellow_section">
                <div className="row">
                    <div className="col-md-6 txt">
                        <div className="title">aideas</div>
                        <div>e’ una società di advisory innovativa rivolta a grandi e piccole imprese.</div>
                    </div>
                    <div className="col-md-6">
                        <img src={bulbs}/>
                    </div>
                </div>
            </div>
            <div className="row description">
                    <div className="col-md-6 align-right">
                        <span className="number">3</span>
                        <span className="areas">aree di consulenza</span>
                    </div>
                    <div className="col-md-6">AIDEAS offre consulenza per lo sviluppo e l’integrazione di alta tecnologia e intelligenza artificiale con l’obiettivo di rendere piu’ efficienti il business model e i servizi svolti dell’impresa. L’aspetto innovativo di AIDEAS è dato dal team e dal servizio offerto.<br></br><br></br><br></br>Il team comprende esperti di <b>Intelligenza Artificiale, Data Science, Economia e Finanza, Aspetti Legali e Telecomunicazioni,</b> e tale combinazione permette di offrire soluzioni altamente strategiche e praticabili al tempo stesso.<br></br><br></br>Il servizio offerto da AIDEAS comprende:</div>
                </div>
                <div className="row points">
                    <div className="col-md-4">
                        <img className="money_icon" src={money_icon}/>
                        <div className="title">strategia</div>
                        <div className="txt">studio del business attuale dell’azienda e design di come integrare tecnologie ed AI nel business</div>
                    </div>
                    <div className="col-md-4">
                        <img className="ai_icon" src={ai_icon}/>
                        <div className="title">finanza</div>
                        <div className="txt">aiuto ad accedere al credito necessario per l’implementazione dello sviluppo proposto, attraverso una rete di accelerators, incubators, angel investors, venture capitals</div>
                    </div>
                    <div className="col-md-4">
                        <img className="people_icon" src={people_icon}/>
                        <div className="title">team</div>
                        <div className="txt">formazione del team responsabile di implementare le idee ed integrarle nell’impresa, in modo che l’impresa diventi autonoma nell’utilizzo della tecnologia introdotta</div>
                    </div>
                </div>
                <img className="slogan" src={slogan}/>
        </section>
    }
}

export default Home