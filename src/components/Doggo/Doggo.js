import React from 'react';

import doggoShape from '../../helpers/properties/dogShape';

import './Doggo.scss';

class Doggo extends React.Component {
  static propTypes = {
    doggo: doggoShape.dogShape,
  }

  render() {
    const { doggo } = this.props;
    return (
      <div className="Doggo col-5">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{doggo.name}</h5>
            <p className="card-text">{doggo.type}</p>
            <p className="card-text">{doggo.barkingIntensity}</p>
            <p className="card-text">{doggo.friendliness}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Doggo;
