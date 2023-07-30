import React from 'react';
import loading from '../../assets/images/loading.svg';

/**
 * A component that displays a loading spinner.
 */
const Loading: React.FC = () => (
  <div className="spinner">
    <img src={loading} alt="Loading" />
  </div>
);

export default Loading;
