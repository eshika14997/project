import React from "react";

function DashboardHeader(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    <p>You can use this website to add you income and expenses.</p>
    </div>
  );
}

export default DashboardHeader;
