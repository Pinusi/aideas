import { render } from "react-dom";
import React from "react";

import mail_icon from '../../assets/images/mail_icon.png'
import twitter_icon from '../../assets/images/twitter_icon.png'
import linkedin_icon from '../../assets/images/linkedin_icon.png'
import website_icon from '../../assets/images/website_icon.png'

class Team extends React.Component {
    render(){
        const { data } = this.props

        let profiles_html = []
        for (let i = 0; i < data.length; i += 3) {
            profiles_html.push(
                <div className="row profiles" key={ i }>
                    <div className="col-md-4">
                        <img className="picture" src={data[i].image}/>
                        <div className="name">{data[i].full_name}</div>
                        <div className="description">{data[i].bio}</div>
                        <div className="social">
                            <a href={`mailto:${data[i].mail}}`}><img src={mail_icon}/></a>
                            <a href={data[i].linkedin}><img src={linkedin_icon}/></a>
                        </div>
                    </div>
                    {data[i + 1] && 
                        <div className="col-md-4">
                            <img className="picture" src={data[i + 1].image}/>
                            <div className="name">{data[i + 1].full_name}</div>
                            <div className="description">{data[i + 1].bio}</div>
                            <div className="social">
                                <a href={`mailto:${data[i + 1].mail}}`}><img src={mail_icon}/></a>
                                <a href={data[i + 1].linkedin}><img src={linkedin_icon}/></a>
                            </div>
                        </div>
                    }
                    {data[i + 2] && 
                        <div className="col-md-4">
                            <img className="picture" src={data[i + 2].image}/>
                            <div className="name">{data[i + 2].full_name}</div>
                            <div className="description">{data[i + 2].bio}</div>
                            <div className="social">
                                <a href={`mailto:${data[i + 2].mail}}`}><img src={mail_icon}/></a>
                                <a href={data[i + 2].linkedin}><img src={linkedin_icon}/></a>
                            </div>
                        </div>
                    }
                </div>
            )
        }

        return <section id="team" className="team">
            <div className="title_1">the</div>
            <div className="positioner">
                <div className="title_2">founders</div>
            </div>
            { profiles_html }
        </section>
    }
}

export default Team