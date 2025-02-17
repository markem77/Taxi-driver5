import React from 'react';

import Headersection from '../components/forlayout/Headersection';
import Laysec1 from '../components/forlayout/Laysec1';
import Laysec2 from '../components/forlayout/Laysec2';
import Laysec3 from '../components/forlayout/Laysec3';
import Laysec4 from '../components/forlayout/Laysec4';


import "./styles/home.css"
const HomePage = () => {
  return (
   <div className="maincont">
    < Headersection/>
      <Laysec3 />
      <Laysec2 />
      <Laysec1 />
      <Laysec4 />
   </div>
  );
};

export default HomePage;
