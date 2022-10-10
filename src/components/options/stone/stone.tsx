import React from "react";
import "./stone.scss";
import img1 from "../../../images/dice-1.png";
import img2 from "../../../images/dice-2.png";
import img3 from "../../../images/dice-3.png";
import img4 from "../../../images/dice-4.png";
import img5 from "../../../images/dice-5.png";
import img6 from "../../../images/dice-6.png";

interface StonerPorps {
  number: number;
}

const Stone: React.FC<StonerPorps> = ({ number }) => {
  const stones = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="stone">
      <img src={stones[number]} alt={stones[number]} />
      <h1>{number}</h1>
    </div>
  );
};

export default Stone;
