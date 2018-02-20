import React from 'react';
import PreloadImg from '../assets/loading.gif';

const Preloader = () => (
  <div>
    <img src={PreloadImg} style={{width: '100%'}} role='presentation'/>
  </div>
);

export default Preloader;
