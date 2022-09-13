import React from "react";
import { groupings } from "../../data/data";
import { Link } from "react-router-dom";
const GroupingHooksFood = () => {
  return (
    <section>
      <div className="grouping">
        <h2>دسته بندی ها</h2>
        <div className="title-grouping">
          {groupings.map((grouping) => (
            <div className="cart-grouping" key={grouping.id}>
              <Link to={`${grouping.pathname}`}>
                <div className="cart-name-group">
                  <img src={grouping.img} alt={grouping.name} />
                  <span>{grouping.name}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupingHooksFood;
