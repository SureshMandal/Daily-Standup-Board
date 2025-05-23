import React from "react";
import Blocker from "./Blocker";
import "./Card.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";


const Card = ({ details }) => {
  console.log(details);
  return (
    <>
    
        <b className="allname">{details.name}</b>
        <p className="yesterday">{details.Yesterday}</p>
        <p className="today">{details.Today}</p>
        <Blocker isBlocked={false}/>
    </>
  );
};

export default Card;
