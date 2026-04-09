import React from "react";

function DashboardHeader(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      <p>You can use this website to add your income and expenses.</p>
      <br>
       <p> This is very useful for students and working people for manage their income and expense, can see their updated balance </p>
    
    </div>
  );
}

export default DashboardHeader;
