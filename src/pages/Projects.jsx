import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const projectsData = [
  { title: 'Shop Verse System', type: 'Web', desc: 'Shopping System Implemented using C# and Forms.', url: 'https://github.com/Haziq739/Shop-Verse-System' },
  { title: 'Smart Traffic System', type: 'Game', desc: 'Smart Traffic System implemented using Operating System Concepts.', url: 'https://github.com/Haziq739/Smart-Traffic-System' },
  { title: 'Enchanted-labyrinth-Explorer', type: 'Game', desc: 'Implemented using Data Structures Concepts.', url: 'https://github.com/Haziq739/Enchanted-labyrinth-Explorer' },
  { title: 'Brick Breaker Game', type: 'Game', desc: 'Implemented using Assembly language concepts.', url: 'https://github.com/Haziq739/Brick-Breaker' },
  { title: 'Dodge Game', type: 'Game', desc: 'Implemented using Object Oriented Programming concepts.', url: 'https://github.com/Haziq739/Dodge-Game' },
  { title: 'Task Management System', type: 'Web', desc: 'Implemented using JavaScript.', url: 'https://github.com/Haziq739/Task-Management-System' },
];

const Filters = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FilterBtn = styled.button`
  background: ${({ active, theme }) => (active ? theme.primary : theme.filterBg)};
  color: ${({ active, theme }) => (active ? '#fff' : theme.text)};
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 2px 8px ${({ theme }) => theme.cardShadow};
  transition: background 0.2s, color 0.2s;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  border-radius: 18px;
  box-shadow: 0 4px 24px ${({ theme }) => theme.cardShadow};
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 8px 32px ${({ theme }) => theme.primary + '33'};
    transform: scale(1.04);
  }
`;

const Projects = () => {
  const location = useLocation();
  function getFilterFromQuery() {
    const params = new URLSearchParams(location.search);
    return params.get('filter') || 'All';
  }
  const [filter, setFilter] = useState(getFilterFromQuery());

  useEffect(() => {
    setFilter(getFilterFromQuery());
  }, [location.search]);

  const filtered = filter === 'All' ? projectsData : projectsData.filter(p => p.type === filter);
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 1rem' }}>
      <Filters>
        {['All', 'Web', 'Mobile', 'AI'].map(f => (
          <FilterBtn key={f} active={filter === f} onClick={() => setFilter(f)}>{f}</FilterBtn>
        ))}
      </Filters>
      <ProjectsGrid>
        {filtered.map((proj, i) => (
          <a
            key={proj.title}
            href={proj.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Card
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <span style={{ fontSize: '0.9rem', color: '#2196F3' }}>{proj.type}</span>
            </Card>
          </a>
        ))}
      </ProjectsGrid>
    </div>
  );
};

export default Projects; 