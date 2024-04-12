import './App.css'
import LuckyN from "./LuckyN";
import {sum} from "./utils.js";

function isSeven(dice){
  return sum(dice) === 7;
}

function allSameValue(dice){
  return dice.every((v)=>v === dice[0]);
}

function App() {
  return (
    <>
      <LuckyN winCheck={isSeven} title="Lucky7"></LuckyN>
      <LuckyN winCheck={allSameValue} title="All Same Values"></LuckyN>
      
    </>
  )
}

export default App

/*
Plays a dice game with numDice number of dice
Shows a win message when sum of numbers on die= goal(7)
A roll again button to re roll the die
 */

/*

Heirarchy of components: App -> LuckyN -> Dice -> Die
                                               -> Die

 */



/*
logic component -> LuckyN component, where we will determine the winner and use logic to do so
presentation/dumb/only ui coomponents - > Dice and Die - > only concerned with UI and no LOGIC
*/
                                              


