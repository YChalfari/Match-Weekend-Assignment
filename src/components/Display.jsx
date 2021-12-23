import React, { Component } from "react";
import Button from "./Button";
import like from "../images/like.png";
import dislike from "../images/dislike.png";
import x from "../images/X.png";
import check from "../images/check.png";
import "./display.css";
const Display = ({ animal, likes, counter, dislikes, isOver, onClick }) => {
  return (
    <div className="main">
      <div className="top-menu">
        <div className="counter-wrap">
          <img src={dislike} alt="" />
          <h4> {dislikes}</h4>
        </div>
        <div className="counter-wrap likes">
          <img src={like} alt="" />
          <h4> {likes.catlikes + likes.doglikes}</h4>
        </div>
      </div>
      {!isOver ? (
        <div className="main-content">
          <h3>{animal.type}</h3>
          <img src={animal.img} alt={animal.type} />
        </div>
      ) : (
        <div className="finished">
          <h4>{`Now you know, you are a ${
            likes.catlikes > likes.doglikes
              ? "cat"
              : likes.catlikes === likes.doglikes
              ? "both equally"
              : "dog"
          } person`}</h4>
        </div>
      )}

      <div className="top-menu">
        <Button
          type={"dislike"}
          name={animal && animal.type}
          onClick={onClick}
          isOver={isOver}
          img={x}
        />
        <Button
          type={"like"}
          name={animal && animal.type}
          onClick={onClick}
          isOver={isOver}
          img={check}
        />
      </div>
    </div>
  );
};

export default Display;
