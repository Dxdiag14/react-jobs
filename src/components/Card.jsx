import React from "react";

const Card = ({ children, bg = "bg-white" }) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};

export default Card;
