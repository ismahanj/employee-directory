import React from "react"
import './App.css';
import EmployeeCard from "./components/employee";
import Employee from "./employee.json";
import EmployeeSearch from "./components/searchResults"

class App extends Component {
  // Setting this.state.employee to the employee json array
  state = {
    employee
  };

  EmployeeSearch = id => {
    // Filter this.state.employee for employee with an id not equal to the id being removed
    const employee = this.state.Employee.filter(employee => employee.id == id);
    // Set this.state.employee equal to the new employee array
    this.setState({ Employee });
  };

  // Map over this.state.employee and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Title>employee List</Title>
        {this.state.employee.map(employee => (
          <EmployeeCard
            EmployeeSearch={this.EmployeeSearch}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            occupation={employee.occupation}
            department={employee.department}
          />
        ))}
      </div>
    );
  }
}

export default App;
