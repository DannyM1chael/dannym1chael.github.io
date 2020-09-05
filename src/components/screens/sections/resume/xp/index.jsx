import React from 'react';

export default  function Experience(props) {

    return (
        <React.Fragment>
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Web Developer</h4>
              <h5>2020 - current time</h5>
              <p><em>innoscripta GmbH</em></p>
              <ul>
                <li>Developed CRM (frontend on React, backend on Laravel)</li>
              </ul>
            </div>
            <div className="resume-item">
                <h4>Specialist</h4>
                <h5>2018 - 2020</h5>
                <p><em>EL AL Israel Airlines, Moscow, Russia</em></p>
            </div>
            <div className="resume-item">
                <h4>Coordinating Manager</h4>
                <h5>2015 - 2018</h5>
                <p><em>Inline Telecom Solutions, Moscow, Russia</em></p>
                <ul>
                    <li>Reconstruction Data Transmission Systems for Rostelecom <b>($1,8 million)</b></li>
                    <li>Reconstruction project based on Huawei for the Winter Universiade 2019 in Krasnoyarsk <br/><b>($1,6 million)</b></li>
                    <li>Construction of <b>300</b> stations for Tele2 and <b>1000</b> stations for Vimpelcom</li>
                    <li>Preparation of replacing Backbone Cisco routers Tele2 <b>($4 million)</b></li>
                    <li>Wi-Fi project for Sberbank <b>(about 2500 AP)</b></li>
                </ul>
            </div>
            <div className="resume-item">
                <h4>Sales Manager</h4>
                <h5>2013 - 2015</h5>
                <p><em>Agat-Aquarius, Moscow, Russia</em></p>
                <ul>
                    <li>Implementation Cisco network for Sterkh Corporation (Saint-Petersburg)</li>
                    <li>Project of upgrading network infrastructure for Delta Credit (Moscow)</li>
                    <li>Integration of DATA Center for Sibaviastroy (Irkutsk)</li>
                </ul>
            </div>
            <div className="resume-item">
                <h4>Sales Manager</h4>
                <h5>2011 - 2013</h5>
                <p><em>Inex-Group-Service, Irkutsk, Russia</em></p>
                <ul>
                    <li>Created server-based Cisco C240 solution for Roslesinforg (Integrated for <b>24</b> branches)</li>
                    <li>Implemented project of DATA Center reconstruction for Oil Company Diteco (Angarsk)</li>
                    <li>Worked on upgrading Cisco network for Administration of Irkutsk City</li>
                </ul>
            </div>
            <div className="resume-item">
                <h4>Technical Specialist</h4>
                <h5>2010 - 2011</h5>
                <p><em>Eldorado, Irkutsk, Russia</em></p>
            </div>
        </React.Fragment>
    )
}