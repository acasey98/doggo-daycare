import React from 'react';

import employeeShape from '../../helpers/properties/employeeShape';

import './Employee.scss';

class Employee extends React.Component {
  static propTypes = {
    doggo: employeeShape.employeeShape,
  }

  render() {
    const { employee } = this.props;
    return (
      <div className="Employee col-5">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{employee.name}</h5>
            <p className="card-text">{employee.species}</p>
            <p className="card-text">{employee.insanometerValue}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Employee;
