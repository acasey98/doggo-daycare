import React from 'react';

import propTypes from 'prop-types';

import doggoShape from '../../helpers/properties/dogShape';

import Doggo from '../Doggo/Doggo';

import './DoggoBucket.scss';

class DoggoBucket extends React.Component {
  static propTypes = {
    doggos: propTypes.arrayOf(doggoShape.dogShape),
  }

  render() {
    const { doggos } = this.props;
    const makeDoggos = doggos.map(doggo => (
      <Doggo key={doggo.id} doggo={doggo} />
    ));
    return (
      <div className="DoggoBucket d-flex flex-wrap">
        { makeDoggos }
      </div>
    );
  }
}

export default DoggoBucket;
