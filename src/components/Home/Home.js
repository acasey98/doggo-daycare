import React from 'react';

import myDoggos from '../../App/doggos';
import DoggoBucket from '../DoggoBucket/DoggoBucket';
import myEmployees from '../../App/employees';
import StaffRoom from '../StaffRoom/StaffRoom';

class Home extends React.Component {
  state = {
    doggos: [],
    employees: [],
  }

  componentDidMount() {
    this.setState({ doggos: myDoggos });
    this.setState({ employees: myEmployees });
  }

  render() {
    const { doggos } = this.state;
    const { employees } = this.state;
    return (
      <div className="Home">
        <div>Doggo Daycare</div>
        <DoggoBucket doggos={doggos} xd='true' />
        <StaffRoom employees={employees} />
      </div>
    );
  }
}

export default Home;
