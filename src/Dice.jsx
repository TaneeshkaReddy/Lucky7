import Die from "./Die";
import "./Dice.css";

export default function Dice({dice,color}){ // dice=[2,3,4] will an array containing dice values
  return(
    <div className="Dice">
      {dice.map((v,i)=>
        <Die key={i} val={v} color={color}></Die>
      )}
      
    </div>
  );
}