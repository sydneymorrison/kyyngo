import './KyyngoLogo.css';
import React from 'react'

import kyyngoLogo from '/Users/sydneymorrison/code/kyyngo/src/images/kyyngo-logo.png';

export default function KyyngoLogo() {
  return (
    <img className="kyyngo-logo" src={kyyngoLogo} alt="kyyngo logo" style={{ width: '120px', height: '40px' }} />
  )
}
