import PropTypes from 'prop-types';

const dogShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  barkingIntensity: PropTypes.string.isRequired,
  friendliness: PropTypes.number.isRequired,
});

export default { dogShape };
