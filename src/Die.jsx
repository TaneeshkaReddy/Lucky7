import "./Die.css";

export default function Die({val,color="rgb(81, 223, 236)"}){
  return <div className="Die" style={{backgroundColor:color}}>{val}</div>
}