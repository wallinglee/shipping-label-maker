import React from 'react';
import './css/app.css';
import ShippingLabelMaker from './features/shipping-label-maker/shipping-label-maker';

function App() {
  return (
    <div className="app container">
      <ShippingLabelMaker />
    </div>
  );
}

export default App;
