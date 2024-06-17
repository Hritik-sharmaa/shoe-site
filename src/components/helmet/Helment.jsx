import React from "react";

const Helment = (props) => {
  document.title = "Cool kicks - " + props.title;
  return <div className="w-full">{props.children}</div>
};

export default Helment;
