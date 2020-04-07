import React, { useState, useEffect } from 'react';
// import 'odometer/themes/odometer-theme-default.css';
// import Odometer from 'react-odometerjs';

function Facts({facts}) {

    // const [odometerValue, setOdometerValue]=useState(0);
    // console.log(odometerValue)

    // useEffect(() => {
    //     setOdometerValue(50)
    // }, [])

    const renderSomeFacts = (item, index) => {
        return (
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" key= { index }>
                <div className="count-box">
                    <i className={`${ item.className }`}></i>
                        <span>
                            {/* <Odometer
                                animation="count"
                                format="d"
                                duration={ 500 }
                                value={ 50 } /> */}
                            {`${ item.spanText }`}
                        </span>
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
                    { facts.map(renderSomeFacts) }
                </div>
            </div>
        </section>
    )
}

export default Facts;