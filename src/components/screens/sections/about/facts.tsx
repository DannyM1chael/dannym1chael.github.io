import { useEffect } from "react";
import Aos from "aos";
import CountUp from "react-countup";

export const Facts = ({ facts }) => {
  useEffect(() => {
    Aos.init({});
  }, []);

  const renderSomeFacts = (item, index) => {
    return (
      <div
        className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
        data-aos="fade-up"
        key={index}
      >
        <div className="count-box">
          <i className={`${item.className}`} />
          <CountUp start={0} end={item.spanText} duration={10}>
            <span>{`${item.spanText}`}</span>
          </CountUp>
          <p>
            <strong>{item.strongText}</strong>
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="facts" className="facts">
      <div className="container">
        <div className="section-title">
          <h2>Facts</h2>
          <p>Some facts about me</p>
        </div>
        <div className="row no-gutters">{facts.map(renderSomeFacts)}</div>
      </div>
    </section>
  );
};
