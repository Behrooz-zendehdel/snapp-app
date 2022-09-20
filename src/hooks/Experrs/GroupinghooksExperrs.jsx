import React from "react";
import { Experss } from "../../data/data";
import { Link } from "react-router-dom";
import "../../Pages/experss.css";

const GroupinghooksExperrs = () => {
  return (
    <section>
      <div className="experss">
        <h2>دسته بندی ها</h2>
        <div className="title-experss">
          {Experss.map((expers) => (
            <div className="cart-experss" key={expers.id}>
              <Link to={`${expers.pathname}`}>
                <div className="cart-name-experss">
                  <img src={expers.img} alt={expers.name} />
                  <span>{expers.name}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupinghooksExperrs;
