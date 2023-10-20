import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "News",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((btn, index) => (
        <Button key={index} name={btn} />
      ))}
    </div>
  );
};

export default ButtonList;

/* {list.map(
    (btn) => {
        return <Button {...btn} />;
      }
      )
    } 
    */
