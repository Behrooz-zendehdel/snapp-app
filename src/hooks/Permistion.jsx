import React from "react";
import { access } from "../data/data";

const Permistion = (props) => {
  return (
    <div className="perimtion">
      {access.map((acc) => (
        <>
          <div className="p-image">
            <img src={acc.img} alt="" />
          </div>
          <h4>{acc.title}</h4>
          <p>{acc.detail}</p>
        </>
      ))}
    </div>
  );
};

export default Permistion;
