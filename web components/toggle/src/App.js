import "./App.css";
import React, { useState } from "react";

function App(props) {
  const { coworkers } = props;

  console.log(coworkers);

  const initialState = coworkers.reduce((a, b) => {
    const name = b.first_name + b.last_name;
    a[name] = true;
    // to set all status online by default => true
    return a;
  }, {});

  const [employeeStatus, setEmployeeStatus] = useState(initialState);

  const toggleStatusHandler = (name) => {
    setEmployeeStatus({ ...employeeStatus, [name]: !employeeStatus[name] });
  };

  return coworkers.map(({ first_name, last_name }) => {
    const name = first_name + last_name;

    return (
      <>
        <div
          className="employee_component"
          key={name}
          onClick={() => toggleStatusHandler(name)}
        >
          <p>
            Name : {first_name} {last_name}
          </p>
          <h4>Status : {employeeStatus[name] ? "Online" : "Offline"}</h4>
        </div>
      </>
    );
  });
}

App.defaultProps = {
  coworkers: [
    { first_name: "Vaibhav", last_name: "Matere" },
    { first_name: "Shubham", last_name: "Smith" },
    { first_name: "Deepak", last_name: "Warner" },
  ],
};

export default App;
