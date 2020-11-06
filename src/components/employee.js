import React from "react";

function EmployeeDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3>Name: {props.name}</h3>
      <h3>Title: {props.title}</h3>
      <h3>Department: {props.Department}</h3>
    </div>
  );
}

export default EmployeeDetail;