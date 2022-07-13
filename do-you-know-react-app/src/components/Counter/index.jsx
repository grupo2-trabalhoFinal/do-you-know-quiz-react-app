import { useEffect, useState } from "react";
import { CounterStyle } from "./style";

const Counter = ({ quizCounter }) => {
  return (
    <CounterStyle>00:{quizCounter.toString().padStart(2, "0")}</CounterStyle>
  );
};

export default Counter;
