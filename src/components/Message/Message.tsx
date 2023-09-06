import React from "react";
import './message.css'
interface Props {
  message: string;
  passTo: string
  onClick: () => void;
  classT?: string
}
const message = (props: Props) => {
  return (
    <div className={`message ${props.classT}`}>
      <p>{props.message}</p>
      <button onClick={props.onClick}>{props.passTo}</button>
    </div>
  );
};

export default message;
