import React from 'react';
import CountUp from 'react-countup';

function Facts({facts}) {

    const renderSomeFacts = (item, index) => {
        return (
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" key= { index }>
                <div className="count-box">
                    <i className={`${ item.className }`}></i>
                        <CountUp start={0} end={ item.spanText } duration={5}>
                            <span>
                                {`${ item.spanText }`}
                            </span>
                        </CountUp>
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