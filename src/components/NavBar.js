import React, { useState, useEffect } from 'react';
import MenuOption from './MenuOption';
import { motion } from 'framer-motion';

export default function NavBar(props) {
  const [mousePosition, setMousePosition] = useState({x: window.innerWidth / 2, y: window.innerHeight});
  const [cursorVariant, setCursorVariant] = useState('outOfBounds');

  const CURSOR_WIDTH = 32;
  const CURSOR_HEIGHT = 32;

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({x: e.clientX, y: e.clientY});
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    inBounds: {
      x: mousePosition.x - CURSOR_WIDTH / 2,
      y: mousePosition.y - CURSOR_HEIGHT / 2,
      top: 0,
      left: 0,
    },
    outOfBounds: {
      x: mousePosition.x - CURSOR_WIDTH / 2,
      y: CURSOR_HEIGHT,
      //display: 'none'
    }
  }

  const onMouseLeaveNavBar = () => setCursorVariant('outOfBounds');
  const onMouseEnterNavBar = () => setCursorVariant('inBounds');

  return (
    <ul className='navbar' onMouseEnter={onMouseEnterNavBar} onMouseLeave={onMouseLeaveNavBar}>
      <motion.div id="cursor" variants={variants} animate={cursorVariant} />
      <MenuOption to="/projects" label="PROJECTS" />
      {/*<MenuOption link="/process" label="Process" />
      <MenuOption link="/resources" label="Resources" />*/}
      <MenuOption to="/" label="ABOUT" />
      <MenuOption to="/experience" label="EXPERIENCE" />
    </ul>
  );
}
