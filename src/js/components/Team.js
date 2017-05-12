import { render } from "react-dom";
import React from "react";

import mail_icon from '../../assets/images/mail_icon.png'
import twitter_icon from '../../assets/images/twitter_icon.png'
import linkedin_icon from '../../assets/images/linkedin_icon.png'
import website_icon from '../../assets/images/website_icon.png'

import cecilia_profile from '../../assets/images/cecilia_profile.png'
import stefano_profile from '../../assets/images/stefano_profile.png'
import daniele_profile from '../../assets/images/daniele_profile.png'
import fabio_profile from '../../assets/images/fabio_profile.png'
import blanca_profile from '../../assets/images/blanca_profile.png'

class Team extends React.Component {
    render(){
        return <section id="team" className="team">
            <div className="title_1">board of</div>
            <div className="positioner">
                <div className="title_2">directors</div>
            </div>
            <div className="row profiles">
                <div className="col-md-4">
                    <img className="picture" src={cecilia_profile}/>
                    <div className="name">cecilia de conto</div>
                    <div className="description">Lavora attualmente come Full Stack Engineer presso Founders Factory, nuovo acceleratore, incubatore della City. Programma in diversi linguaggi sia front-end che back-end quali Javascript, Python, e framework relativi. Ha lavorato negli anni per un portfolio di aziende vario quali Accenture, World Economic Forum, Sony e Geometry Global.</div>
                    <div className="social">
                        <a href="mailto:deconto@aideas.ai"><img src={mail_icon}/></a>
                        <a href="linkedin.com/in/decontocecilia"><img src={linkedin_icon}/></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <img className="picture" src={stefano_profile}/>
                    <div className="name">stefano fratta</div>
                    <div className="description">Bolognese di nascita ed Europeo di adozione, Stefano è ́un avvocato specializzato in diritto delle nuove tecnologie. Ha lavorato in vari paesi europei e adesso dirige il dipartimento legale che si occupa dei prodotti Big Data, Fintech e Consumer del gruppo Telefonica.</div>
                    <div className="social">
                        <a href="mailto:fratta@aideas.ai"><img src={mail_icon}/></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <img className="picture" src={daniele_profile}/>
                    <div className="name">daniele magazzeni</div>
                    <div className="description">E’ lecturer in Artificial Intelligence al King’s College London, dove dirige il gruppo di ricerca di AI. La sua attività di ricerca si concentra sull’uso dell’Intelligenza Artificiale in applicazioni innovative e sulla verifica del corretto funzionamento di sistemi autonomi. Daniele e’ scientific advisor ed ha collaborazioni con diverse società ed organizzazioni internazionali.</div>
                    <div className="social">
                        <a href="mailto:magazzeni@aideas.ai"><img src={mail_icon}/></a>
                    </div>
                </div>
            </div>
            <div className="row profiles">
                <div className="col-md-4">
                    <img className="picture" src={fabio_profile}/>
                    <div className="name">fabio mercorio</div>
                    <div className="description">E’ ricercatore in Computer Science presso l’Università di Milano-Bicocca. La sua ricerca è principalmente volta alla definizione ed applicazione di tecniche di AI per la BI, Knowledge Extraction e Big Data Analytics in contesti applicativi aziendali. E’ collaboratore di ricerca presso il centro di ricerca CRISP dell’Università di Milano-Bicocca ed è docente di NoSQL ed ETL presso il Master in BI & Big Data Analytics della medesima Università.</div>
                    <div className="social">
                        <a href="mailto:mercorio@aideas.ai"><img src={mail_icon}/></a>
                        <a href="https://twitter.com/fabiomercorio"><img src={twitter_icon}/></a>
                        <a href="https://www.linkedin.com/profile/view?id=47991888"><img src={linkedin_icon}/></a>
                        <a href="http://www.crisp-org.it/mercorio/"><img src={website_icon}/></a>
                        <a href="https://www.researchgate.net/profile/Fabio_Mercorio"><img src={website_icon}/></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <img className="picture" src={blanca_profile}/>
                    <div className="name">blanca zamora leria</div>
                    <div className="description">Lavora a Londra dove e' Risk and Financial Consultant presso Moody´s Analytics Enterprise Risk Solutions. Si occupa di design e sviluppo di modelli di rischio di credito per banche e fondi di asset management, in Europa, Africa e Medio Oriente. Ha esperienza in accounting e credit risk analysis. Ha anche lavorato come consulente nell'ambito di tax advisory services. È laureata in Giurisprudenza ed in Business Administration ed ha un Master in Finance.</div>
                    <div className="social">
                        <a href="mailto:zamora@aideas.ai"><img src={mail_icon}/></a>
                    </div>
                </div>
            </div>
        </section>
    }
}

export default Team