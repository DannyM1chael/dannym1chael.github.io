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
                <h4>Full-Stack Development</h4>
                <h5>2019 - 2020</h5>
                <p><em>HackerU</em></p>
                <ul>
                    <li>Understanding of Object Oriented Programming, MVC</li>
                    <li>Knowledge of Unix-system</li>
                    <li>HTML, CSS (SASS) and Javascript, jQuery, frameworks - Vanilla JS, React JS</li>
                    <li>Understanding of UI/UX</li>
                    <li>Вackend-development, Apache server, PHP and MySQL</li>
                    <li>Cybersecurity, including OWASP top 10</li>
                </ul>
            </div>
            <div className="resume-item">
                <h5>2018</h5>
                <p><em>Essential Cloud Infrastructure: Foundation by Google Cloud</em></p>
                <p><em>Essential Cloud Infrastructure: Core Services by Google Cloud</em></p>
            </div>
            <div className="resume-item">
                <h5>2017</h5>
                <p><em>Programming for Everybody (Getting Started with Python) by University of Michigan</em></p>
                <p><em>Python Programming: A Concise Introduction by Wesleyan University</em></p>
                <p><em>Google Cloud Platform Fundamentals: Core Infrastructure by Google Cloud</em></p>
            </div>
            <div className="resume-item">
                <h5>2013</h5>
                <p><em>Microsoft Certified Technology Specialist</em></p>
            </div>
            <div className="resume-item">
                <h5>2004 - 2007</h5>
                <p><em>Irkutsk State Railway University</em></p>
                <p>Faculty – Traffic management</p>
                <p>Specialty – Engineer</p>
            </div>

        </React.Fragment>
    )
}