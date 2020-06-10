import React, { useEffect } from 'react';
import Aos from 'aos';

export default function Skills({skills}) {

    useEffect(() => {
        Aos.init({});
    }, []);

    const renderSomeSkills = (item, index) => {
        return (
            <div className="progress" key= { index }>
                <span className="skill">{ item.skill } <i className="val">{`${ item.value }%`}</i></span>
                <div className="progress-bar-wrap">
                    <div className="progress-bar" style={{ width: `${item.value}%`}}></div>
                </div>
            </div>
        )
    };

    return (
        <section id="skills" className="skills section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Skills</h2>
                </div>
                <div className="row skills-content">
                    <div className="col-lg-6" data-aos="fade-up">
                        { skills.slice(0, skills.length/2).map(renderSomeSkills) }
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        { skills.slice(skills.length/2).map(renderSomeSkills) }
                    </div>
                </div>
            </div>
        </section>
    )
}
