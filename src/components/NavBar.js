import React from 'react';
import MenuOption from './MenuOption';

export default function NavBar(props) {
  return (
    <ul className='navbar'>
      <MenuOption to="/projects" label="PROJECTS" />
      {/*<MenuOption link="/process" label="Process" />
      <MenuOption link="/resources" label="Resources" />*/}
      <MenuOption to="/" label="ABOUT" />
      <MenuOption to="/experience" label="EXPERIENCE" />
    </ul>
  );
}
