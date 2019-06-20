import React from 'react';

import propTypes from 'prop-types';

import employeeShape from '../../helpers/properties/employeeShape';

import Employee from '../Employees/Employee';

import './StaffRoom.scss';

class StaffRoom extends React.Component {
  static propTypes = {
    employee: propTypes.arrayOf(employeeShape.employeeShape),
  }

  render() {
    const { employees } = this.props;
    const makeStaff = employees.map(employee => (
      <Employee key={employee.id} employee={employee} />
    ));
    return (
      <div className="DoggoBucket d-flex flex-wrap">
        { makeStaff }
      </div>
    );
  }
}

export default StaffRoom;
