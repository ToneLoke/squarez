import React from 'react';
import moment from 'moment';
import './Header.scss';


const Header = ({ name }) => (
  <div className="header">
    <div className="label">
      <div className="team-name">{name}</div>
    </div>
  </div>
);

export default Header;
