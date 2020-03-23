import React from 'react';
import SomeFacts from './facts';
// import Odometer from 'react-odometerjs';

function Facts(props) {

    const renderSomeFacts = (item, index) => {
        return (
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" key= { index }>
                <div className="count-box">
                    <i className={`${ item.className }`}></i>
                    <span>{ item.spanText }</span>
                    <p><strong>{ item.strongText }</strong></p>
                </div>
            </div>
        )
    };

    return (
        <section id="facts" className="facts">
            <div className="container">
                <div className="section-title">
                    <h2>Facts</h2>
                    <p>Some facts about me</p>
                </div>
                <div className="row no-gutters">
                    { SomeFacts.map(renderSomeFacts) }
                </div>
            </div>
        </section>
    )
}

export default Facts;