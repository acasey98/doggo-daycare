import React from 'react';

import myDoggos from './doggos';
import DoggoBucket from '../components/DoggoBucket/DoggoBucket';
import myEmployees from './employees';
import StaffRoom from '../components/StaffRoom/StaffRoom';

import './App.scss';

class App extends React.Component {
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
      <div className="App">
        <div>Doggo Daycare</div>
        <DoggoBucket doggos={doggos} xd='true' />
        <StaffRoom employees={employees} />
      </div>
    );
  }
}

export default App;
