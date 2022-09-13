import React from "react";
import { tfoods } from "../../data/data";
import { Link } from "react-router-dom";

const TypesHooksFood = () => {
  return (
    <section>
      <div className="types-of-food">
        <h2>انواع غذاها</h2>
        <div className="types-of-food-detail">
          {tfoods.map((tfood) => (
            <div className="cart-types-of-food-image" key={tfood.id}>
              <Link to={`${tfood.pathname}`}>
                <img src={tfood.img} alt={tfood.name} />
                <div className="cart-types-of-food-name">
                  <span>{tfood.name}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypesHooksFood;
