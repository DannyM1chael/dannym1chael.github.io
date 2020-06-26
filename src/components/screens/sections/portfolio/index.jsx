import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Project from './project';
import projectPages from '../../../api/projects'; 

export default function Portfolio(props) {

  const[activeIndex, setActiveIndex] = useState(null);
  const handleClick = index => {
    setActiveIndex(index)
  };

  const [state, setState] = useState({
    data:
      projectPages
  });

  const categories = [...['All'], ...new Set(state.data.map(c => c.category))];

  let data = state.data;
  if(state.category && state.category !== 'All'){
    data = data.filter(project => project.category === state.category)
  };
 
  const handleCategory = (category) =>{
    setState(prev =>({ ...prev, category}))
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out-back"
    });
  }, []);

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Some my projects</p>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-filters">
              {categories.map((category, index) => 
                (<li 
                    key={ index }
                    className={ activeIndex === index ? "filter-active" : "filter-nonactive" }
                    onClick={() => handleCategory(category)}
                    onMouseDown={() => handleClick(index)}
                    name={ index }>
                  { category }
                </li>))
              }
            </ul>
          </div>
        </div>
        <TransitionGroup className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
            {data.map(({name, page, img}, index) => (
              <CSSTransition
                key={ index }
                timeout={ 500 }
                classNames="item">
                <Project name={ name } page={ page } img={ img } key={ index } />
              </CSSTransition>
            ))}
        </TransitionGroup>
      </div>
    </section>
  )
};
