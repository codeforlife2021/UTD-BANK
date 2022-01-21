import React from "react";
import CounterItem from "./CounterItem";
import SectionTitle from "./SectionTitle";

const Counter = () => {
  return (
    <section className="counter-section pt-100 pb-70">
      <div className="container">
        <SectionTitle title="We always try to evaluate customers Values" />

        <div className="counter-content">
          <div className="counter-item">
            <h3>
              <span className="counter">70</span>
              <span className="counter-text-lg">+</span>
            </h3>
            <p>Feedback</p>
          </div>

          <CounterItem number="40" sign="K" title="Feedback" />

          <CounterItem number="1000" sign="k" title="Downloaded" />

          <CounterItem number="590" sign="+" title="Workers" />
        </div>
      </div>
    </section>
  );
};

export default Counter;
