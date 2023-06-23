import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function MenuOption(props) {
  const location = useLocation();
  
  return (
    <li className={'menu-option' + (location.pathname === props.to ? ' active' : '')}>
      <Link className={'menu-option-link' + (location.pathname === props.to ? ' active' : '')} to={props.to}>{props.label}</Link>
    </li>
  );
}
