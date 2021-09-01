import React from 'react';

export default function Experience() {
    return (
        <>
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
                <h4>Frontend Developer</h4>
                <h5>2021 - current time</h5>
                <p><em>Ministry of Emergency Situations</em></p>
                <ul>
                    <li>Developing new task management-system (Vue/Symfony)</li>
                </ul>
            </div>
            <div className="resume-item">
              <h4>Junior Full-Stack Developer</h4>
              <h5>2020 - 2021</h5>
              <p><em>innoscripta GmbH</em></p>
              <ul>
                  <li>Developed internal CRM-system (React/Redux/Laravel)</li>
                  <li>Developed Project Management Tool Clusterix (React/Redux)</li>
                  <li>Developed microservices (Vanilla JS)</li>
                  <li>Implemented new avatar system for 850 users with future growing to 10k (AWS)</li>
                  <li>Developed architecture and transfer main website to new platform (NEXT.js)</li>
              </ul>
            </div>
        </>
    )
}