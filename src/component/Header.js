import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2  shadow-lg">
      <div className="flex col-span-1 py-2 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 p-2 cursor-pointer "
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAAC8vLzt7e2ysrJycnIiIiLHx8fw8PCFhYWamprj4+PBwcHNzc3p6em4uLgvLy9CQkI3Nzd/f39qampvb2+Pj4+ioqLa2tpUVFRKSkr29vYYGBirq6smJiY9PT1hYWEPDw9YWFg1kJmwAAACDklEQVR4nO3d7XbBUBCF4UN8NwhRQqro/V9kiR/VH5pZM5Y5R9/nCvZe0ZzEmqkQAAAAAAAAAAAAAAAAAAAAnqvKu3Eajh5RbzTuRGzRNRece3doszVex413gXZFZik49I4vsbA09A4vM9EX3HtnF9I33HlHFxpqC9Yf3tGF1B/TN+/kUn0a3vP6n9LXv9P8g9Pi9U/8kHuHl1gaCoYw8Y7f7nNmahh63gXabE2vFhdZ6d3hL4e5tV+jmvfilD/kWwwAAAAAAAAAAAAAABCVOovUgwYV8tWn90zJXbu1cVzobBb7fOLaWHDqXaDd0VQwiSlh9YTwxcE7vUiuL5jEykynM9A3PHpnF6rUDQfe0YU22oIz7+RSpbZhEnfSi3dtw9HJO7qQ/tRfekcX0g8Kr72jC9XqhiPv6DKWh5oElhHOTC9RK+/0Avqtp0bfO3+rqa3g+QU47htqX3+X+VFtyn6cxl3zwgwAAAAAAAAAAAAAAMBz1ftjMYjTYWwepgnRT+8V1o7ZwrtCK/UIdKOOeyDqam9pmMLgnmVUP1Te2WW2+oZR/5PkG/oFtsI7ulBPW5B9i2io9y1e/xqGeNdjf1P/HSYw5H2lv5cmch7u1AVTWUA0PNOEOoUT0fboPYt/E9jyGyzNVYz6Bx7P74fGjZmLbPN18u5xR1E+oB8AAAAAAAAAAAAAAAAAAABufQPXyzi7ezBe2AAAAABJRU5ErkJggg=="
          alt="menu"
        />
        <img
          className="h-8 p-2  "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuE54d8krphaVP1AQ1Jd4G1uRqLcA2N81TnA&usqp=CAU"
          alt="logo"
        />
      </div>
      <div className="col-span-10 px-10 py-2">
        <input
          className="w-1/2 border border-gray-400 p-1 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 p-1 rounded-r-full">
          Search
        </button>
      </div>
      <div className="col-span-1 py-2">
        <img
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Header;
