import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  border-radius: 18px;
  box-shadow: 0 4px 24px ${({ theme }) => theme.cardShadow};
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ToggleBtn = styled.button`
  background: ${({ theme }) => theme.filterBg};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 20px;
  padding: 0.7rem 2rem;
  font-size: 1.1rem;
  margin-top: 1.5rem;
  cursor: pointer;
  box-shadow: 0 2px 8px ${({ theme }) => theme.cardShadow};
  transition: background 0.2s, color 0.2s;
`;

const Settings = ({ themeMode, setThemeMode }) => {
  return (
    <Container>
      <Card initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2>Settings</h2>
        <p>Switch between Dark and Light mode for the website.</p>
        <ToggleBtn onClick={() => setThemeMode(themeMode === 'light' ? 'dark' : 'light')}>
          {themeMode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </ToggleBtn>
      </Card>
    </Container>
  );
};

export default Settings; 