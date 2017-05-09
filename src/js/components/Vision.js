import { render } from "react-dom";
import React from "react";

import mix from '../../assets/images/mix.jpg'
import lens from '../../assets/images/lens.jpg'

class Vision extends React.Component {
    render(){
        return <section id="vision" className="vision">
            <div className="section_title">
                <div className="title">vision</div>
                <br></br>
                <div className="subtitle">_ in cosa crediamo</div>
            </div>
            <div className="row txt_1">
                <div className="col-md-12">Nel mondo delle imprese e delle start up, in Italia cosi’ come nel Regno Unito, si cerca quasi sempre di inventare nuovi servizi o addirittura nuovi bisogni per il consumatore finale e ormai spesso ci si scontra con settori saturi.</div>
            </div>
            <div className="row">
                <img className="lens" src={lens}/>
                <div className="highlight">
                    <div className="txt_ye">Dalla esperienza di lavoro personale fatta nell’ambito tecnologico, ci siamo invece accorti del</div>
                    <div className="title_ye">POTENZIALE DI UNA VISIONE ALTERNATIVA</div>
                </div>
            </div>
            <div className="row txt_4">
                <div><b>quella in cui le nuove tecnologie, soprattutto nel campo dell’intelligenza artificiale e del “big data”, possano invece rivelarsi un elemento importante e innovativo per migliorare, cambiare o rinnovare servizi e società già esistenti, migliorando il business della società e/o rendendo l’esperienza dell’utente finale ancora più unica e semplice.</b></div>
            </div>
            <div className="line"></div>
            <div className="row">
                <div className="col-md-6"><div className="txt_3">La nostra idea di fondo e' dunque di accompagnare le aziende nello sviluppare una vision strategica che si basi sull’adozione di tecnologie di AI o Big data secondo un format che prevede lo studio dei servizi attualmente offerti dalle società clienti ed un’analisi di come tali servizi possano essere migliorati.<br></br><br></br>A tale scopo, il team offre una combinazione unica di skill eterogenei e multidisciplinari (Intelligenza Artificiale, Data Science, Economia e Finanza, Aspetti Legali, Telecomunicazioni) che si complementano tra di loro per offrire al cliente finale una visione strategica completa ed innovativa.</div></div>
                <div className="col-md-6"><img className="mix" src={mix}/></div>
            </div>
            <div className="row txt_1">
                <div className="col-md-12">La concreta realizzazione dell’innovazione e’ un elemento chiave della proposta di AIDEAS. A tal fine, AIDEAS vuole accompagnare l’azienda nel favorire l’accesso al credito e nel formare adeguatamente un team che sia in grado di implementare l’innovazione tecnologia e di mantenerla in futuro in modo che l’azienda diventi autonoma nel suo sviluppo.</div>
            </div>
        </section>
    }
}

export default Vision