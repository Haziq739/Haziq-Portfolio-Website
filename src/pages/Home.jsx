import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import profileImg from '../assets/profile.jpg';

const HomeContainer = styled.div`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
`;

const ProfileImg = styled(motion.img)`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 8px 32px ${({ theme }) => theme.primary + '33'};
  margin-bottom: 2rem;
  border: 5px solid ${({ theme }) => theme.primary};
`;

const Name = styled(motion.h1)`
  font-size: 3.2rem;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 4px blue; /* ✅ Added for visibility */
`;


const Subtitle = styled(motion.h2)`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem;
  font-weight: 500;
`;

const Button = styled(motion.button)`
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  background: ${({ theme }) =>
    theme.background === '#0E0E52'
      ? 'linear-gradient(90deg, #2196F3 0%, #0E0E52 100%)'
      : theme.primary};
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 4px 24px #2196f344;
  transition: background 0.3s;
  &:hover {
    background: ${({ theme }) =>
      theme.background === '#0E0E52'
        ? 'linear-gradient(90deg, #0E0E52 0%, #2196F3 100%)'
        : theme.primary + 'CC'};
    scale: 1.05;
  }
`;

const Filters = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2.5rem;
`;

const FilterBtn = styled(motion.button)`
  background: ${({ theme, active }) => (active ? theme.primary : theme.filterBg)};
  color: ${({ theme, active }) => (active ? '#fff' : theme.text)};
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 2px 8px ${({ theme }) => theme.cardShadow};
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #fff;
  }
`;

const ProjectsPreview = styled.div`
  margin-top: 2rem;
  width: 100%;
  max-width: 700px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  border-radius: 14px;
  box-shadow: 0 4px 24px ${({ theme }) => theme.cardShadow};
  padding: 1.2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 8px 32px ${({ theme }) => theme.primary + '33'};
    transform: scale(1.04);
  }
`;

const projectsData = [
  { title: 'All Projects', type: 'All', nav: '/projects' },
  { title: 'Web Projects', type: 'Web', nav: '/projects?filter=Web' },
  { title: 'Mobile App', type: 'Mobile', nav: '/projects?filter=Mobile' },
  { title: 'AI Based Projects', type: 'AI', nav: '/projects?filter=AI' },
];

const filterOptions = ['All', 'Web', 'Mobile', 'AI'];

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projectsData : projectsData.filter(p => p.type === filter);

  // Dynamic gradient for name based on theme
  const nameGradient =
  theme.background === '#0E0E52'
    ? 'linear-gradient(90deg, #b0d4ff 0%, #2196F3 100%)' // Dark mode: light blue to vibrant blue
    : 'linear-gradient(90deg, #0E0E52 0%, #2196F3 100%)'; // Light mode: dark blue to blue

  return (
    <HomeContainer>
      <ProfileImg
        src={profileImg}
        alt="Muhammad Haziq Naeem"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 10 }}
      />
      <Name
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        style={{ background: nameGradient }}
      >
        Muhammad Haziq Naeem
      </Name>
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        Full Stack Developer & Designer
      </Subtitle>
      <Button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        onClick={() => navigate('/projects')}
      >
        View My Work
      </Button>
      <Filters>
        {filterOptions.map(f => (
          <FilterBtn
            key={f}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            active={filter === f}
            onClick={() => {
              if (f === 'All') {
                navigate('/projects');
              } else {
                navigate(`/projects?filter=${f}`);
              }
            }}
          >
            {f}
          </FilterBtn>
        ))}
      </Filters>
      <ProjectsPreview>
        {filtered.map((proj, i) => (
          <ProjectCard
            key={proj.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate(proj.nav)}
            style={{ cursor: 'pointer' }}
          >
            <h4 style={{ margin: 0 }}>{proj.title}</h4>
            <span style={{ fontSize: '0.9rem', color: theme.primary }}>{proj.type}</span>
          </ProjectCard>
        ))}
      </ProjectsPreview>
    </HomeContainer>
  );
};

export default Home; 