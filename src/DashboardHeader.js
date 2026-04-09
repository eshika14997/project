import React from "react";

function DashboardHeader(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      <p>You can use this website to add you income and expenses.</p>
      <p>It is very useful for working people and studnets as it will show the balance amount, you can add income and expenses and the balance will be updated accordingly.</p>
    </div>
  );
}

export default DashboardHeader;
