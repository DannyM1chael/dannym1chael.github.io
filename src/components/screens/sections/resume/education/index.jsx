import React from 'react';

export default function Education(props) {

    return (
        <React.Fragment>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
                <h4>Bachelor of Computer Science</h4>
                <h5>2019 - 2023</h5>
                <p><em>Moscow Witte University</em></p>
                <p>Faculty – Information technology</p>
                <p>Specialty – Computer science</p>
            </div>
            <div className="resume-item">
                <h4>Web Developer</h4>
                <h5>2019 - 2020</h5>
                <p><em>Israel’s Premier Digital Skill and Cybersecurity Institute </em></p>
                <p>Web Development</p>
            </div>
        </React.Fragment>
    )
}