import React from "react";
//
function Button({ img, isOver, onClick, name, type }) {
  const handleClick = (e) => {
    if (!isOver) {
      onClick(name, type);
    }
  };
  return (
    <div onClick={handleClick}>
      <img src={img} alt="" />
    </div>
  );
}

export default Button;
