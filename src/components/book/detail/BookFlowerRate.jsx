import React from "react";
import { ReactComponent as Flower } from "../../../asset/icons/flower.svg";

const FlowerRate = ({ count }) => {
  const arr = [0, 0, 0, 0, 0];

  return (
    <>
      {arr.map((data, i) => {
        if (count <= i) {
          return <Flower fill="#fff" width="12px" height="12px" />;
        } else {
          return <Flower fill="#A1E092" width="12px" height="12px" />;
        }
      })}
    </>
  );
};

export default FlowerRate;
