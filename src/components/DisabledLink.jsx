import React from "react";
import { Link } from "react-router-dom";

const DisabledLink = (props) =>
  {if(props.disabled) return (props.children)
  else return (<Link to={props.to}>{props.children}</Link>)}

export default DisabledLink;
