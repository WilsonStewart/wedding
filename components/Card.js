import React from "react";

const Card = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "1.5rem",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        borderRadius: ".3rem",
        margin: "2rem",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
