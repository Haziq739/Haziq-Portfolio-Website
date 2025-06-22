import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Info = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  border-radius: 18px;
  box-shadow: 0 4px 24px ${({ theme }) => theme.cardShadow};
  padding: 2rem 1.5rem;
  margin-bottom: 2rem;
`;

const Label = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  min-height: 100px;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.primary};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.9rem 1.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #1769aa;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Info initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Label>Name</Label>
        Muhammad Haziq Naeem
        <Label style={{ marginTop: '1rem' }}>Email</Label>
        naeemhaziq345@gmail.com
        <Label style={{ marginTop: '1rem' }}>Phone</Label>
        0335-7452457
      </Info>
      <ContactForm as={motion.form} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <Textarea placeholder="Your Message" required />
        <Button type="submit">Send Message</Button>
      </ContactForm>
    </Container>
  );
};

export default Contact; 