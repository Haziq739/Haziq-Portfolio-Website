import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCog } from 'react-icons/fa';

const Nav = styled.nav`
  width: 100%;
  background: ${({ theme }) => theme.navBg};
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem 0;
  margin: 0;
  list-style: none;
`;

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.text};
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;
  &.active, &:hover {
    background: ${({ theme }) => theme.primary + '22'};
    color: ${({ theme }) => theme.primary};
  }
`;

const SettingsIcon = styled(FaCog)`
  font-size: 1.3rem;
  margin-left: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  transition: color 0.2s;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
  const location = useLocation();
  return (
    <Nav as={motion.nav} initial={{ y: -60 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 80 }}>
      <NavList>
        <li><StyledLink to="/">Home</StyledLink></li>
        <li><StyledLink to="/projects">Projects</StyledLink></li>
        <li><StyledLink to="/contact">Contact</StyledLink></li>
        <li><StyledLink to="/settings"><SettingsIcon title="Settings" /></StyledLink></li>
      </NavList>
    </Nav>
  );
};

export default Navbar; 