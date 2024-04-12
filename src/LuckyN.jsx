import {useState} from "react";
import {getRolls} from "./utils.js";
import {sum} from "./utils.js";
import Dice from "./Dice";
import  "./LuckyN.css";

export default function LuckyN({title="Dice Game",numDice=2,winCheck}){ // numDice=2 means that we have to create 2 Die components ,means dice array=[5,4] length=2, only 2 elements

  const [dice,setDice]=useState(getRolls(numDice));

  // const isWinner= sum(dice) === goal;
  const isWinner=winCheck(dice);

  const re_roll = () => setDice(getRolls(numDice));

  return (
    <div className="LuckyN">
      <h1>{title} {isWinner && "Winner"}</h1>
      <Dice dice={dice}></Dice>
      <br />
      <button onClick={re_roll}>Re-Roll Dice</button>
    </div>
  )
}