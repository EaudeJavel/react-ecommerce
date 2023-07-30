import React from 'react';
import loading from '../../assets/images/loading.svg';

const Loading: React.FC = () => (
  <div className="spinner">
    <img src={loading} alt="Loading" />
  </div>
);

export default Loading;
